interface Props {
  amount: number;
  setAmount: (value: number) => void;
}

function InputAmount({ amount, setAmount }: Props) {
  return (
    <label htmlFor="amount">
      Amount to Deposit in UST
      <input
        id="amount"
        type="number"
        value={amount == null ? '' : amount}
        onChange={(event) => setAmount(Number(event.currentTarget.value))}
      />
    </label>
  );
}

export default InputAmount;
