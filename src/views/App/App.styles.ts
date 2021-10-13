import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  inset: 0;
  min-height: 100vh;
  padding: 16px clamp(16px, 7.3%, 140px);
`;

export const NavWrapper = styled.div`
  width: 100%;
`;

export const MainContentWrapper = styled.section``;

// @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
// }
