// document.viewport.getScrollOffsets() → Array

document.viewport.getScrollOffsets();
//-> { left: 0, top: 0 }
window.scrollTo(0, 120);
document.viewport.getScrollOffsets();
//-> { left: 0, top: 120 }