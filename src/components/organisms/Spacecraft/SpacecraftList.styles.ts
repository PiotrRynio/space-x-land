import styled from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => theme.mixins.positions.center}
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 24px;
  max-width: 1640px;
  width: 100%;
`;
