$('#mySelector').printThis({
  debug: false, // show the iframe for debugging
  importCSS: true, // import page CSS
  importStyle: false, // import style tags
  printContainer: true, // grab outer container as well as the contents of the selector
  loadCSS: 'path/to/my.css', // path to additional css file - use an array [] for multiple
  pageTitle: '', // add title to print page
  removeInline: false, // remove all inline styles from print elements
  printDelay: 333, // variable print delay
  header: null, // prefix to html
  footer: null, // postfix to html
  base: false, // preserve the BASE tag, or accept a string for the URL
  formValues: true, // preserve input/form values
  canvas: false, // copy canvas elements (experimental)
  doctypeString: '...', // enter a different doctype for older markup
  removeScripts: false, // remove script tags from print content
  copyTagClasses: false // copy classes from the html & body tag
});
