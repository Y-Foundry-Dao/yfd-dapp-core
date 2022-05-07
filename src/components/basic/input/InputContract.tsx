interface Props {
  contract: string;
  setContract: (value: string) => void;
}

function InputContract({ contract, setContract }: Props) {
  return (
    <label htmlFor="contractAddress">
      Contract Address
      <input
        id="contractAddress"
        type="text"
        value={contract}
        onChange={(event) => setContract(event.currentTarget.value)}
      />
    </label>
  );
}

export default InputContract;
