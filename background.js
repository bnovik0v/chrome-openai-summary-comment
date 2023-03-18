// background.js
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'summarize',
    title: 'Summarize it',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'comment',
    title: 'Comment it',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId === 'summarize' || info.menuItemId === 'comment') {
    // Inject the content script
    chrome.tabs.executeScript(tab.id, { file: 'content.js' }, async function () {
      // Check for any errors during content script injection
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }

      chrome.storage.sync.get('openaiApiKey', async function (apiKeyData) {
        const apiKey = apiKeyData.openaiApiKey;

        if (!apiKey) {
          alert('Please set your OpenAI API key in the extension settings.');
          return;
        }

        const action = info.menuItemId;
        const selectedText = info.selectionText;
        const prompt = action === 'summarize' ? `Summarize: ${selectedText}` : `Write a comment reply for this post: ${selectedText}`;

        const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.3,
          }),
        });

        const resultData = await response.json();

        if (resultData.choices && resultData.choices.length > 0) {
          const resultText = resultData.choices[0].text.trim();
          const resultTitle = action === 'summarize' ? 'Summary:' : 'Comment:';

          chrome.tabs.sendMessage(tab.id, {
            action: 'showResult',
            resultTitle: resultTitle,
            resultText: resultText,
          }, function(response) {
            console.log('Message sent to content.js:', response);
          });
        } else {
          console.error('No choices returned from API call.');
        }
      });
    });
  }
});

