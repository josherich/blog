"use strict";
let LoginType;
(function (LoginType) {
  LoginType[LoginType["CHAT_GPT"] = 0] = "CHAT_GPT";
  LoginType[LoginType["API_KEY"] = 1] = "API_KEY";
})(LoginType || (LoginType = {}));

const PROMPT_KEY = 'summary_prompt';
const SETTINGS_KEY = 'user_settings';

async function getSettings() {
  return chrome.storage.local.get(SETTINGS_KEY)
    .then(settings => {
      if (settings && settings[SETTINGS_KEY]) {
        return settings[SETTINGS_KEY];
      } else {
        return {
          apiKey: null,
          loginType: LoginType.CHAT_GPT
        };
      }
    });
}

async function saveSettings(settings) {
  await chrome.storage.local.set({
    user_settings: settings
  });
}

async function setLoginType(type) {
  let settings = await getSettings();
  settings.loginType = type;
  await saveSettings(settings);
}

async function getSummaryPrompt() {
  return chrome.storage.local.get(PROMPT_KEY)
    .then(result => {
      if (result && result[PROMPT_KEY]) {
        return result[PROMPT_KEY];
      } else {
        return "Summarise the main points of the article in a list format:";
      }
    });
}

function populateSummaryPrompt(prompt) {
  let promptElement = document.getElementById('promptInput');
  if (promptElement) {
    promptElement.value = prompt;
  }
}

function setupSummaryPrompt() {
  let promptElement = document.getElementById('promptInput');
  if (promptElement) {
    promptElement.addEventListener('input', async () => {
      let promptForm = document.getElementById('promptForm');
      if (promptForm) {
        promptForm.classList.remove('was-validated');
      }
    });

    let saveButton = document.getElementById('savePromptButton');
    if (saveButton) {
      saveButton.addEventListener('click', async () => {
        let prompt = promptElement?.value;
        if (prompt) {
          let promptForm = document.getElementById('promptForm');
          if (promptForm) {
            promptForm.classList.add('was-validated');
          }
          if (!prompt.endsWith(':')) {
            prompt += ':';
          }
          await saveSummaryPrompt(prompt);
        }
      });
    }

    let resetButton = document.getElementById('resetButton');
    if (resetButton) {
      resetButton.addEventListener('click', async () => {
        await resetSummaryPrompt();
        init();
      });
    }
  }
}

async function saveSummaryPrompt(prompt) {
  if (prompt) {
    await chrome.storage.local.set({
      summary_prompt: prompt
    });
  }
}

async function resetSummaryPrompt() {
  await chrome.storage.local.remove('summary_prompt');
}

async function init() {
  let loginType = await getLoginType();
  setLoginUi(loginType);
  setupLoginTypeToggle();

  let apiKey = await getApiKey();
  if (apiKey) {
    populateApiKey(apiKey);
  }
  setupApiKey();

  getSummaryPrompt().then(prompt => {
    if (prompt) {
      populateSummaryPrompt(prompt);
    }
    setupSummaryPrompt();
  });
}

function setLoginUi(type) {
  if (type == LoginType.API_KEY) {
    document.getElementById('openAiKeyRadio').checked = true;
    let apiKeyForm = document.getElementById('apiKeyForm');
    if (apiKeyForm) {
      apiKeyForm.classList.remove('d-none');
    }
    let chatFeatures = document.getElementById('apiKeyLoginFeatures');
    if (chatFeatures) {
      chatFeatures.classList.add('d-none');
    }
  } else if (type == LoginType.CHAT_GPT) {
    document.getElementById('chatGptLoginRadio').checked = true;
    let apiKeyForm = document.getElementById('apiKeyForm');
    if (apiKeyForm) {
      apiKeyForm.classList.add('d-none');
    }
    let chatFeatures = document.getElementById('apiKeyLoginFeatures');
    if (chatFeatures) {
      chatFeatures.classList.remove('d-none');
    }
  }
}

function setupLoginTypeToggle() {
  let radios = document.querySelectorAll('input[type=radio][name="loginRadio"]');

  function handleChange(event) {
    let value = event.target.value;
    if (value === 'openAiKeyRadio') {
      setLoginType(LoginType.API_KEY);
      setLoginUi(LoginType.API_KEY);
    } else {
      setLoginType(LoginType.CHAT_GPT);
      setLoginUi(LoginType.CHAT_GPT);
    }
  }

  Array.prototype.forEach.call(radios, (radio) => {
    radio.addEventListener('change', handleChange);
  });
}

async function getApiKey() {
  let settings = await getSettings();
  return settings.apiKey;
}

function populateApiKey(apiKey) {
  let apiKeyInput = document.getElementById('apiKeyInput');
  if (apiKeyInput) {
    apiKeyInput.value = apiKey;
  }
}

function setupApiKey() {
  let apiKeyInput = document.getElementById('apiKeyInput');

  if (apiKeyInput) {
    apiKeyInput.addEventListener('input', async () => {
      let apiKeyForm = document.getElementById('apiKeyForm');
      if (apiKeyForm) {
        apiKeyForm.classList.remove('was-validated');
      }
    });
  }

  let saveButton = document.getElementById('saveTokenButton');
  if (saveButton) {
    saveButton.addEventListener('click', async () => {
      let apiKey = apiKeyInput?.value;
      if (apiKey) {
        let apiKeyForm = document.getElementById('apiKeyForm');
        if (apiKeyForm) {
          apiKeyForm.classList.add('was-validated');
        }
        await setLoginType(LoginType.API_KEY);
        await saveApiKey(apiKey);
      }
    });
  }
}

async function saveApiKey(apiKey) {
  if (apiKey) {
    let settings = await getSettings();
    settings.apiKey = apiKey;
    await saveSettings(settings);
  }
}

addEventListener('load', () => {
  init();
});