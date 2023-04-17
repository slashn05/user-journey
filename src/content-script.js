import { getCssSelector } from "css-selector-generator";
import events from "./events";

const captureEvent = (e) => {
  let userAction = { action: e.type };
  try {
    if (e.type === "load") {
      userAction = { ...userAction, value: e.target.URL };
    } else {
      const selector = getCssSelector(e.target);
      userAction = { ...userAction, selector, value: e.target.value };
    }
    chrome.runtime.sendMessage({ userAction }, (response) => {
      console.log(response);
    });
  } catch (e) {
    console.log(e);
  }
};

events.forEach((type) => {
  window.addEventListener(type, captureEvent, true);
});
