# Chrome OpenAI Summary & Comment Extension

This Chrome extension allows users to generate summaries and comments on selected text using the OpenAI API. It adds two context menu items, "Summarize it" and "Comment it", which users can click to generate the respective outputs. This project was built with the help of ChatGPT, an AI language model developed by OpenAI.

## Features

- Generate a summary of the selected text using OpenAI API
- Generate a comment on the selected text using OpenAI API
- Display the generated summary or comment as a pop-up on the web page
- Customizable API key setting

## Advantages of Using This Extension

There are several benefits to using this Chrome OpenAI Summary and Comment Extension:

1. **Free**: This extension is completely free to use, making it accessible to everyone.

2. **No Ads**: We don't show any ads, ensuring a clean and distraction-free user experience.

3. **Easy to Use**: With just a few clicks, you can generate summaries or comments on any text you select.

4. **Open Source**: The project is open-sourced and hosted on GitHub, so anyone can view, use, or contribute to the code.

5. **Powered by OpenAI**: The extension leverages OpenAI's advanced language model, ChatGPT, to generate high-quality summaries and comments.

6. **Privacy-Focused**: The extension does not store or share your data, and all API calls are made directly to OpenAI's API.

By using this extension, you can enjoy a seamless, ad-free experience while taking advantage of advanced AI technology to quickly generate summaries and comments on the web.


## Download & Installation

1. Go to the [Releases](https://github.com/bnovik0v/chrome-openai-summary-comment/releases) section of this repository and download the latest `chrome-openai-summary-comment.zip` file.

2. Extract the contents of the `.zip` file to a folder on your computer.

3. Open Chrome and navigate to `chrome://extensions/`.

4. Enable "Developer mode" by toggling the switch in the top right corner.

5. Click "Load unpacked" and select the folder where you extracted the extension files.

6. The extension should now be installed and ready for use.

## Obtaining an OpenAI API Token

To use this Chrome extension, you will need an OpenAI API token. Follow these steps to obtain one:

1. Sign up for an OpenAI account at [https://beta.openai.com/signup/](https://beta.openai.com/signup/). If you already have an account, log in at [https://beta.openai.com/login/](https://beta.openai.com/login/).

2. Once logged in, go to the [API Keys](https://beta.openai.com/account/api-keys) section of your account.

3. Click on the "Create an API Key" button to generate a new API token. You will see a string that starts with `sk-`. This is your API token.

4. Copy the API token and paste it into the extension's settings page, as described in the "Usage" section of this `README.md`.

⚠️ **Important**: Keep your API token secure, as it provides access to your OpenAI account and API usage. Do not share it with anyone or include it in your code or version control.

## Usage

1. Select the text you want to summarize or comment on any web page.

2. Right-click the selected text, and click either "Summarize it" or "Comment it" in the context menu.

3. The generated summary or comment will be displayed as a pop-up on the web page.

4. To set your OpenAI API key, right-click the extension icon in the toolbar and select "Options". Enter your API key and save the settings.

### Demo

#### Comment it

Select the text you want to comment on, right-click to open the context menu, and click on the "Comment it" button. A popup message will appear with a generated comment based on the selected text.

![Screenshot 1](https://github.com/bnovik0v/chrome-openai-summary-comment/blob/main/screenshots/comment-example1.jpg)

#### Summarize it

Select the text you want to summarize, right-click to open the context menu, and click on the "Summarize it" button. A popup message will appear with a summary of the selected text.

![Screenshot 2](https://github.com/bnovik0v/chrome-openai-summary-comment/blob/main/screenshots/summary-example1.jpg)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

