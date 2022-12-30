import { useState } from 'react';
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box
} from '@chakra-ui/react';

function ItemSlider({ sliderData }: any) {
  const [sliderValue, setSliderValue] = useState(50);

  const markMid = (sliderData.min + sliderData.max) / 2;
  const mark1 = markMid / 1.5;
  const mark2 = markMid * 1.5;

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm'
  };

  return (
    <Slider onChange={(val) => setSliderValue(val)}>
      <SliderMark value={mark1} {...labelStyles}>
        {mark1}
      </SliderMark>
      <SliderMark value={markMid} {...labelStyles}>
        {markMid}
      </SliderMark>
      <SliderMark value={mark2} {...labelStyles}>
        {mark2}
      </SliderMark>
      <SliderMark
        value={sliderData.value}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        {sliderData.value}
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default ItemSlider;
