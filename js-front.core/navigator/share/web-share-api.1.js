if (navigator.share) {
  navigator
    .share({
      title: "Web Share API",
      text: "Sent with the Web Share API",
      url: "<Github repo name>"
    })
    .then(() => {
      console.log("Shared successfully.");
    })
    .catch(error => {
      console.log("There was an error sharing:", error);
    });
} else {
  console.log("The Web Share API is not supported in your browser.");
}
