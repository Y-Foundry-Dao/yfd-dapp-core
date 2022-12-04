import { useSetRecoilState } from 'recoil';
import {
  inputFeedbackName,
  inputFeedbackHandle,
  inputFeedbackMethod,
  inputFeedbackDesc
} from 'recoil/input/feedback/atoms';

const useHandleInputsFeedback = () => {
  const setFeedbackName = useSetRecoilState(inputFeedbackName);
  const setFeedbackHandle = useSetRecoilState(inputFeedbackHandle);
  const setFeedbackMethod = useSetRecoilState(inputFeedbackMethod);
  const setFeedbackDesc = useSetRecoilState(inputFeedbackDesc);

  const handleInputFeedbackName = (event: any) =>
    setFeedbackName(event.target.value);

  const handleInputFeedbackHandle = (event: any) =>
    setFeedbackHandle(event.target.value);

  const handleInputFeedbackMethod = (event: any) =>
    setFeedbackMethod(event.target.value);

  const handleInputFeedbackDesc = (event: any) =>
    setFeedbackDesc(event.target.value);

  return {
    handleInputFeedbackName,
    handleInputFeedbackHandle,
    handleInputFeedbackMethod,
    handleInputFeedbackDesc
  };
};

export default useHandleInputsFeedback;
