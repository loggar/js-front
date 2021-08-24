const setCookieValue = (name, value, path, domain) =>
  (document.cookie = `${name}=${value};${path ? "path=" + path + "; " : ""}${
    domain ? "domain=" + domain + "; " : ""
  }`);
