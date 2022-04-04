interface Props {
  src: string;
  alt: string;
}

function StrategyLogo({ src, alt }: Props) {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
}

export default StrategyLogo;
