const createElement = domString => new DOMParser().parseFromString(domString, "text/html").body.firstChild;
const a = createElement('<a href="/home" class="active">Home</a>');
