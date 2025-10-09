// Define event type constants
const LessonEvent = {
  START_LESSON: "START LESSON",
  END_LESSON: "END LESSON",
};

const LessonEventPayload = {
  lessonName: "string"
};

const ActivityEvent = {
  START_ACTIVITY: "START ACTIVITY",
  END_ACTIVITY: "END ACTIVITY",
};

const ActivityEventPayload = {
  activityName: "string"
};


// Example payload shapes (for reference)
/**
 * @typedef {Object} LessonActivityEventPayload
 * @property {string} lessonName
 */

function sendEvent(type, payload) {
  const message = { type, payload };
  window.parent?.postMessage(message, "*");
  window.ReactNativeWebView?.postMessage(JSON.stringify(message));
}
