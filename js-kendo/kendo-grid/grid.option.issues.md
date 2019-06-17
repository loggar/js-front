# kendo grid options issue

## `persistSelection : true,`

When this option is used, the issue occurs

```
kendo.all.js:65778 Uncaught TypeError: Cannot read property 'id' of undefined
    at init._restoreSelection (kendo.all.js:65778)
    at init.refresh (kendo.all.js:65745)
    at init.d (jquery.min.js:2)
    at init.trigger (kendo.all.js:164)
    at init._process (kendo.all.js:7505)
    at init.success (kendo.all.js:7240)
    at Object.success (kendo.all.js:7134)
    at init.read (kendo.all.js:5972)
    at kendo.all.js:7130
    at init._queueRequest (kendo.all.js:7359)
```

`kendo.all.js`

```
that.dataSource.options.schema.model.id;
```
