const listener = e => {
  // e : ClipboardEvent
  e.clipboardData.setData("text/plain", text);
  e.preventDefault();
};

document.addEventListener("copy", listener);
document.execCommand("copy");
document.removeEventListener("copy", listener);
