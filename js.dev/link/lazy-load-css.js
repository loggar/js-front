function lazy_load_css(path) {
  //The function responsible for lazy loading our css files
  let type_of_path = typeof path; //This refers to the type of the path. It can be string or object
  switch (type_of_path) {
    case "object":
      var head = document.getElementsByTagName("head")[0]; //Get's the head element
      for (let i = 0; i < path.length; i++) {
        //Loops through all the paths
        var link = document.createElement("link"); //Creates a link element
        link.href = path[i]; //Assigns a path to the tag
        link.rel = "stylesheet"; //Set it's rel to stylesheet
        link.type = "text/css"; //Set's it's type to text/css
        head.appendChild(link); //Appends it to the head of the document.
      }
      break;
    case "string": //If the path is a single path
      var head = document.getElementsByTagName("head")[0]; //Get the head element from the html document
      var link = document.createElement("link"); //Create the link element
      link.href = path; //Assign the value of path to the link's href
      link.rel = "stylesheet"; //Assign 'stylesheet' to the link
      link.type = "text/css";
      head.appendChild(link); //Appends the link to the head of the document.
      break;
  }
}
