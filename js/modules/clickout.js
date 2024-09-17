export default function clickOut(element, events, callback) {
  const html = document.documentElement;
  const attribute = "data-event";

  function verifyClickOut(event) {
    if (!element.contains(event.target)) {
      events.forEach((actionEvent) => {
        html.removeEventListener(actionEvent, verifyClickOut);
      });
      element.removeAttribute(attribute);
      callback();
    }
  }

  if (!element.hasAttribute(attribute)) {
    events.forEach((actionEvent) => {
      setTimeout(() => {
        html.addEventListener(actionEvent, verifyClickOut);
      });
    });
    element.setAttribute(attribute, "");
  }
}
