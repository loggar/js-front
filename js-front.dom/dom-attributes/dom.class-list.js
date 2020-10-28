// <div id="divNode" class="panel panel-group item"></div>
divNode.classList; // DOMTokenList [ "panel", "pane-group", "item" ]
divNode.classList.add("item-group");
divNode.classList.contains("panel"); // true

// <div id="divNode" class="panel panel-group item"></div>
divNode.classList.item(0); // "panel"
divNode.classList.item(1); // "pane-group"
divNode.classList.item(2); // "item"

divNode.classList.remove("panel");
divNode.classList.replace("item", "tab");

divNode.classList.toggle("panel");
