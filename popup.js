// popup.js
document.addEventListener('DOMContentLoaded', async function () {
  chrome.runtime.sendMessage({ action: 'processText' }, async function (globalData) {
    const title = document.getElementById('title');
    const result = document.getElementById('result');

    if (globalData.action === 'summarize' || globalData.action === 'comment') {
      const apiKey = globalData.apiKey;
      const selectedText = globalData.selectedText;
      const prompt = globalData.action === 'summarize' ? `Summarize: ${selectedText}` : `Comment on: ${selectedText}`;

      title.textContent = globalData.action === 'summarize' ? 'Summary:' : 'Comment:';
      result.textContent = 'Loading...';

      try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: null,
            temperature: 0.7,
          }),
        });

        const data = await response.json();
        const resultText = data.choices[0].text.trim();
        result.textContent = resultText;
      } catch (error) {
        console.error('Error fetching the summary/comment:', error);
        result.textContent = 'An error occurred. Please try again later.';
      }
    }
  });
});

