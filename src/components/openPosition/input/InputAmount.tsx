interface Props {
  amount: number;
  setAmount: (value: number) => void;
}

function InputAmount({ amount, setAmount }: Props) {
  return (
    <label htmlFor="amount">
      Amount to Deposit
      <input
        id="amount"
        type="text"
        value={amount == null ? '' : amount}
        onChange={(event) => setAmount(Number(event.currentTarget.value))}
      />
    </label>
  );
}

export default InputAmount;
