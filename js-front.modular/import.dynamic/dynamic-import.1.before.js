import { exportAsPdf } from "./export-as-pdf.js";
const exportPdfButton = document.querySelector(".exportPdfBtn");
exportPdfButton.addEventListener("click", exportAsPdf);
