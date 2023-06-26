document.addEventListener("DOMContentLoaded", function() {
    const captureButton = document.getElementById("capture");
    const screenshotContainer = document.getElementById("screenshotContainer");
  
    captureButton.addEventListener("click", function() {
      chrome.tabs.captureVisibleTab(function(screenshotDataUrl) {
        const screenshotImage = new Image();
        screenshotImage.src = screenshotDataUrl;
        screenshotContainer.appendChild(screenshotImage);
      });
    });
  });
  