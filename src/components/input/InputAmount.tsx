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

  return (
    <Label>
      <StyledTitle>{label}</StyledTitle>
      <Input type="number" value={amount} onChange={handleChange} />
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
  height: 35px;
  margin-top: 2%;
  color: ${(props) => `${props.theme.colors.color4}`};
  text-align: center;

  font-size: 1.2rem;
  font-weight: 600;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 2%;
`;

const StyledTitle = styled.h2`
  text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
  margin: 0% 0 0 0;
  padding-bottom: 0px;
  font-size: 1em;
  color: ${(props) => `${props.theme.colors.color3}`};
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 21px;
  grid-gap: 10px;
  align-items: center;
}

:after, :before {
  content: " ";
  display: block;
  border-bottom: 1px solid ${(props) => `${props.theme.colors.color3}`};
  box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
  height: 5px;
`;

export default InputAmount;
