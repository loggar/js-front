console.log("Classic console output");

// Hi Medium
console.log(
  "%c Hi Medium! ",
  "font-weight: bold; font-size: 55px; font-family: arial; color: red; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black"
);

// Simple colors
console.log(
  "%c Red! %c Blue! %c Green %c Orange %c Purple",
  "color: red; font-size: 14pt;",
  "color: blue; font-size: 14pt;",
  "color: green; font-size:14pt;",
  "color: orange; font-size: 14pt;",
  "color: purple; font-size: 14pt;"
);

// Classic rainbow example
console.log(
  "%c Colors",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);
