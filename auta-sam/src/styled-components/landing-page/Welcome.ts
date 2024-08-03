import styled from 'styled-components';
import backgroundWelcome from '../../assets/landing-home.png';

const WelcomeSection = styled.div`
  background-image: url(${backgroundWelcome});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  max-width: 800px; 
  width: 100%;
  padding: 0 20px; 
  text-align: center;
`;

const Title = styled.h1`
  font-family: var(--font-family);
  font-size: 48px;
  color: white;
  text-align: center;
`;

export { WelcomeSection, Title, ContentWrapper };
