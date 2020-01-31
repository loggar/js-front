// MutationObserver: You can observe changes to any DOM node
/*
const target = document.querySelector("#container");
const observer = new MutationObserver(callback);
observer.observe(target, options);
*/

const target = document.querySelector("#container");
const callback = (mutations, observer) => {
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case "attributes":
        // the name of the changed attribute is in
        // mutation.attributeName
        // and its old value is in mutation.oldValue
        // the current value can be retrieved with
        // target.getAttribute(mutation.attributeName)
        break;
      case "childList":
        // any added nodes are in mutation.addedNodes
        // any removed nodes are in mutation.removedNodes
        break;
    }
  });
};

const observer = new MutationObserver(callback);
observer.observe(target, {
  attributes: true,
  attributeFilter: ["foo"], // only observe attribute 'foo'
  attributeOldValue: true,
  childList: true
});

// When you are done observing the target you can disconnect the observer and if needed, call its takeRecords method to fetch any pending mutations that have not been delivered to the callback yet:
const mutations = observer.takeRecords();
callback(mutations);
observer.disconnect();
