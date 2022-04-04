interface Props {
  setModalIsOpen: (arg0: boolean) => void;
}
function EnterButton({ setModalIsOpen }: Props) {
  return <button onClick={() => setModalIsOpen(true)}>Enter</button>;
}

export default EnterButton;
