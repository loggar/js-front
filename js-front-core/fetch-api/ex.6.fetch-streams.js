/*
XHR lacks streaming. You can get access to .responseText while the request is in progress, but the whole response is still going to buffer into memory.

With fetch, you get access to the low-level body stream. Say I wanted to load a massive CSV and find the value in the cell after the one containing "Jake":
*/

fetch("/big-data.csv")
  .then(function(response) {
    var reader = response.body.getReader();
    var partialCell = "";
    var returnNextCell = false;
    var returnCellAfter = "Jake";
    var decoder = new TextDecoder();

    function search() {
      return reader.read().then(function(result) {
        partialCell += decoder.decode(result.value || new Uint8Array(), {
          stream: !result.done
        });

        // Split what we have into CSV 'cells'
        var cellBoundry = /(?:,|\r\n)/;
        var completeCells = partialCell.split(cellBoundry);

        if (!result.done) {
          // Last cell is likely incomplete
          // Keep hold of it for next time
          partialCell = completeCells[completeCells.length - 1];
          // Remove it from our complete cells
          completeCells = completeCells.slice(0, -1);
        }

        for (var cell of completeCells) {
          cell = cell.trim();

          if (returnNextCell) {
            reader.cancel("No more reading needed.");
            return cell;
          }
          if (cell === returnCellAfter) {
            returnNextCell = true;
          }
        }

        if (result.done) {
          throw Error("Could not find value after " + returnCellAfter);
        }

        return search();
      });
    }

    return search();
  })
  .then(function(result) {
    console.log("Got the result! It's '" + result + "'");
  })
  .catch(function(err) {
    console.log(err.message);
  });

/*
Here I'm reading through the CSV (yes, I know my regex is naive), but with only a chunk of content in memory at a given time. Once I find the value I'm looking for, I cancel the stream, closing the connection.

response.body is a ReadableStream as defined by the streams spec. Streaming was planned from the outset, but it's one of the bits we launched without as the spec was still in progress.

TextDecoder is part of the encoding spec. If the chunk it receives via .decode(input, {stream: true}) ends with a partial multi-byte character, it will return and flush everything but that partial. The next call to decode appends onto the partial, hopefully forming a whole character.
*/
