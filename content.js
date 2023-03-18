// content.js
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  if (request.action === 'showResult') {
    console.log('Message received in content.js:', request);
    const { resultTitle, resultText } = request;

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '20%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = '9999';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.maxWidth = '80%';
    popup.style.textAlign = 'center';
    popup.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('h3');
    title.innerText = resultTitle;
    title.style.marginBottom = '10px';
    popup.appendChild(title);

    const result = document.createElement('p');
    result.innerText = resultText;
    popup.appendChild(result);

    document.body.appendChild(popup);

    setTimeout(function () {
      document.body.removeChild(popup);
    }, 10000);

    sendResponse({ success: true });
  }
  sendResponse({ success: true });
});

