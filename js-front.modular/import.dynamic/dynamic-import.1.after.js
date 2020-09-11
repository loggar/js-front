const exportPdfButton = document.querySelector(".exportPdfBtn");
exportPdfButton.addEventListener("click", () => {
  import("./export-as-pdf.js")
    .then((module) => {
      module.exportAsPdf();
    })
    .catch((err) => {
      // handle the error if the module fails to load
    });
});
