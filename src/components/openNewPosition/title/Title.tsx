interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <p>{title}</p>;
}

export default Title;
