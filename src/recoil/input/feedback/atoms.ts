import { atom } from 'recoil';

//~~~~~~~~~~~~~~~~
// atom only
//~~~~~~~~~~~~~~~~

// feedback form
const inputFeedbackName = atom({
  key: 'inputFeedbackName',
  default: ''
});
const inputFeedbackHandle = atom({
  key: 'inputFeedbackHandle',
  default: ''
});
const inputFeedbackMethod = atom({
  key: 'inputFeedbackMethod',
  default: ''
});
const inputFeedbackDesc = atom({
  key: 'inputFeedbackDesc',
  default: ''
});

export {
  inputFeedbackName,
  inputFeedbackHandle,
  inputFeedbackMethod,
  inputFeedbackDesc
};
