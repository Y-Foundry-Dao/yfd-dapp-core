import styled from 'styled-components';
import socialInfo from 'utilities/socialInfo';

function SocialIcons() {
  return (
    <Ul>
      {Object.values(socialInfo).map((social, i) => {
        return (
          <Li key={i}>
            <Link href={social.link} target="_blank" rel="noreferrer">
              {social.icon}
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
}

const Ul = styled.ul`
  list-style-type: none;
  height: 100%;
  width: 28%;
  margin: 0 5% 0 0;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-around;

  @media (min-width: 425px) {
    width: 25%;
  }
  @media (min-width: 550px) {
    width: 22%;
  }
  @media (min-width: 756px) {
    width: 18%;
  }
  @media (min-width: 1024px) {
    width: 16%;
  }
`;

const Li = styled.li`
  width: 20%;
  display: flex;
`;

const Link = styled.a`
  display: block;
  width: 100%;
  z-index: 1;
`;

export default SocialIcons;
