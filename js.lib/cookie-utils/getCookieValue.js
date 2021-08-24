const getCookieValue = (name) =>
  document.cookie.match(new RegExp(`${name}=(.*?);`))?.[1];
