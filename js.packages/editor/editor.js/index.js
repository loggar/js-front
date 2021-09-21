try {
  var editor = new EditorJS({
    holderId: "editorjs",
    placeholder: "Let`s write an awesome story!",
    autofocus: true,
  });

  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  const btn = document.getElementById("button");

  btn.addEventListener("click", function () {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  });
} catch (reason) {
  console.log(`Editor.js initialization failed because of ${reason}`);
}
