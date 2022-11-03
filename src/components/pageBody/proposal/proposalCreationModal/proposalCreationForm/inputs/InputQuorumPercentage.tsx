import {
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import { inputQuorumPercent } from 'recoil/input/atoms';

function InputQuorumPercentage() {
  const quorumPercent = useRecoilValue(inputQuorumPercent);
  const { handleInputQuorumPercent } = useHandleInputs();
  return (
    <Flex width="100%" alignItems="center" gap={5}>
      <Heading as="h3" size="md">
        Quorum Percentage:
      </Heading>
      <NumberInput
        maxW="140px"
        mr="2rem"
        my={5}
        defaultValue={25}
        step={1}
        min={5}
        max={95}
        value={quorumPercent}
        onChange={handleInputQuorumPercent}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        defaultValue={25}
        step={1}
        min={5}
        max={95}
        value={quorumPercent}
        onChange={handleInputQuorumPercent}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="12px" children={quorumPercent} />
      </Slider>
    </Flex>
  );
}

export default InputQuorumPercentage;
