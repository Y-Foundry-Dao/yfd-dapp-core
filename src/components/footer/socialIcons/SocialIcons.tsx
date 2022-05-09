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
  display: flex;
  list-style-type: none;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;

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
  z-index: 1;
  cursor: pointer;
`;

export default SocialIcons;
