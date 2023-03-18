const openaiApiKeyInput = document.getElementById('openaiApiKey');
const saveButton = document.getElementById('save');

// Load saved API key
chrome.storage.sync.get('openaiApiKey', function (data) {
  openaiApiKeyInput.value = data.openaiApiKey || '';
});

// Save API key
saveButton.addEventListener('click', function () {
  chrome.storage.sync.set({ openaiApiKey: openaiApiKeyInput.value }, function () {
    alert('API key saved!');
  });
});

