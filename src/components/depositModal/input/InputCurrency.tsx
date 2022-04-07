import React, { CSSProperties, FC, KeyboardEvent, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  max?: number;
  onValueChange: (value: number) => void;
  style?: CSSProperties;
  value: number;
}

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

const InputCurrency: FC<Props> = ({
  className = '',
  max = Number.MAX_SAFE_INTEGER,
  onValueChange,
  style = {},
  value
}) => {
  const valueAbsTrunc = Math.trunc(Math.abs(value));
  if (
    value !== valueAbsTrunc ||
    !Number.isFinite(value) ||
    Number.isNaN(value)
  ) {
    throw new Error(`invalid value property`);
  }
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      const { key, keyCode } = e;
      if (
        (value === 0 && !VALID_FIRST.test(key)) ||
        (value !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)
      ) {
        return;
      }
      const valueString = value.toString();
      let nextValue: number;
      if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString: string =
          value === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
      } else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
          nextValueString === '' ? 0 : Number.parseInt(nextValueString, 10);
      }
      if (nextValue > max) {
        return;
      }
      onValueChange(nextValue);
    },
    [max, onValueChange, value]
  );
  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);
  const valueDisplay = (value / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <Label>
      Deposit
      <Input
        className={className}
        inputMode="numeric"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={style}
        value={valueDisplay}
      />
    </Label>
  );
};

const Input = styled.input`
  background: linear-gradient(
    90.83deg,
    rgba(245, 250, 255, 0.1) -11.59%,
    rgba(237, 245, 255, 0) 106.85%
  );
  border-radius: 11px;
  border: none;
  height: 65px;
  color: ${(props) => `${props.theme.colors.white}`};
  text-align: center;
  font-size: 1.2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export default InputCurrency;
