# print-this

```
npm i print-this
```

```js
/**
 * @Module bootstrap Modal Box for Demo Print(HTML)
 */
var modalDemo = (function() {
  var hide = function(boxId) {
    $('#' + boxId).modal('hide');
    $('#' + boxId).remove();
  };
  var show = function(boxId, body, cssText) {
    var cssArea = cssText ? '<style>' + cssText + '</style>' : '';
    var ModalDemoDiv = `<div class="modal" id="${boxId}" data-backdrop="static" data-keyboard="false role="dialog">
      <div class="modal-dialog" style="width: 840px;" >
        <div class="modal-content">
          <div class="modal-body" id="${boxId}_printArea">
            ${cssArea}
            ${body}
          </div>
        </div>
      </div>
    </div>`;
    $(document.body).append(ModalDemoDiv);
    $('#' + boxId).modal('show');
    $('#' + boxId + '_printArea').printThis({
      importCSS: true,
      importStyle: true,
      afterPrint: function() {
        hide(boxId);
      }
    });
  };
  return {
    show: show,
    hide: hide
  };
})();
```
