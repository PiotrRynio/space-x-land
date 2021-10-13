import styled from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => theme.mixins.positions.center}
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 24px;
  width: 100%;
  max-width: 1400px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    max-width: 1640px;
  }
`;
