import styled from 'styled-components';

interface Props {
  amount: number;
  setAmount: (value: number) => void;
}

function InputAmount({ amount, setAmount }: Props) {
  const handleChange = (e: any) => {
    setAmount(e.target.value);
  };
  const handleBlur = (e: any) => {
    const num = amount.toFixed(2);
    setAmount(Number(num));
  };

  return (
    <Label>
      Deposit
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
