import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

interface Props {
  id: string;
  name: string;
  placeholder: string;
  decimalsLimit: number;
  amount: number;
  setAmount: (value: number) => void;
  label: string;
}

function InputCurrency({
  id,
  name,
  placeholder,
  decimalsLimit,
  amount,
  setAmount,
  label
}: Props) {
  const handleValueChange = (value: any) => {
    setAmount(value === undefined ? 0 : value);
  };

  return (
    <label>
      <h2>{label}</h2>
      <CurrencyInput
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={0}
        allowNegativeValue={false}
        decimalsLimit={decimalsLimit}
        allowDecimals={true}
        onValueChange={handleValueChange}
        value={amount}
      />
    </label>
  );
}

// const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 2%;
// `;

// const StyledTitle = styled.h2`
//   text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
//   margin: 15% 0 0 0;
//   padding-bottom: 0px;
//   font-size: 1em;

//   display: grid;
//   grid-template-columns: 1fr max-content 1fr;
//   grid-template-rows: 21px;
//   grid-gap: 10px;
//   align-items: center;

//   :after,
//   :before {
//     content: ' ';
//     display: block;

//     height: 5px;
//   }
// `;

export default InputCurrency;