const actions = [];
chrome.runtime.onMessage.addListener((message, sender, response) => {
  actions.push(message.userAction);
  response(actions);
});
