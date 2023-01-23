import CurrencyInput from 'react-currency-input-field';

interface Props {
  id: string;
  name: string;
  placeholder: string;
  decimalsLimit: number;
  amount: string;
  setAmount: (value: string) => void;
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
  const handleValueChange = (value: string | undefined) => {
    setAmount(value === undefined ? '0' : value);
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

export default InputCurrency;
