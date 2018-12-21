const loadFont = url => {
  // the 'fetch' equivalent has caching issues
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let css = xhr.responseText;
      css = css.replace(/}/g, "font-display: swap; }");

      const head = document.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
  };
  xhr.send();
};

loadFont("https://fonts.googleapis.com/css?family=Rammetto+One");
