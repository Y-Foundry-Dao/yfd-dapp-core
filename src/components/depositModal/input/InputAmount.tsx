import styled from 'styled-components';

interface Props {
  amount: number;
  setAmount: (value: number) => void;
  label: string;
}

function InputAmount({ amount, setAmount, label }: Props) {
  const handleChange = (e: any) => {
    return setAmount(e.target.value);
  };
  const handleBlur = (e: any) => {
    if (typeof amount === 'string') {
      return setAmount(amount);
    } else {
      const num: any = amount.toFixed(2);
      return setAmount(Number(num));
    }
  };

  return (
    <Label>
      {label}:
      <Input
        type="number"
        value={amount}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Label>
  );
}

const Input = styled.input`
  background: linear-gradient(
    90.83deg,
    rgba(245, 250, 255, 0.1) -11.59%,
    rgba(237, 245, 255, 0) 106.85%
  );
  border-radius: 11px;
  border: none;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => `${props.theme.colors.white}`};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export default InputAmount;
