const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const uaDetail = {
  isIE: UA && /msie|trident/.test(UA),
  isIE9: UA && UA.indexOf("msie 9.0") > 0,
  isEdge: UA && UA.indexOf("edge/") > 0,
  isAndroid: UA && UA.indexOf("android") > 0,
  isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
  isChrome: UA && /chrome\/\d+/.test(UA) && !(UA && UA.indexOf("edge/") > 0),
  isPhantomJS: UA && /phantomjs/.test(UA),
  isFF: (UA && UA.match(/firefox\/(\d+)/)) || false,
};
