var locationUtil = (function() {
  return {
    isLocal: function() {
      return (
        (location.hostname && location.hostname.indexOf("localhost") >= 0) ||
        (location.hostname && location.hostname.indexOf("127.0.0.1") >= 0)
      );
    },
    isTest: function() {
      if (!location.hostname) return false;
      return (
        location.hostname.indexOf("url_1") == 0 ||
        location.hostname.indexOf("url_2") == 0 ||
        location.hostname.indexOf("url_3") == 0 ||
        location.hostname.indexOf("url_4") == 0
      );
    },
    isNotProduct: function() {
      return locationUtil.isLocal() || locationUtil.isTest();
    },
    isProduct: function() {
      return !locationUtil.isLocal() && !locationUtil.isTest();
    }
  };
})();
