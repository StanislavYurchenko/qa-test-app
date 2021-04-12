import { StyledContainer } from './MainContainer.style';
// import Toggle from '../Toggle/Toggle';

export default function Container({ children }) {
  return (
    <StyledContainer>
      {/* <Toggle /> */}
      {children}
    </StyledContainer>
  );
}
