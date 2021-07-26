//here we have our heading
const heading = document.querySelector(".heading");

//now let us add our subheading
const subheading = document.createElement("h5");
subheading.textContent = "I am a subheading";

//we can now add this subheading to the heading element
heading.appendChild(subheading);
