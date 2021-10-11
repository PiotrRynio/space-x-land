import styled from 'styled-components';

export const Body1 = styled.p`
  ${({ theme }) => theme.mixins.typography.body1};
`;
export const Body2 = styled.p`
  ${({ theme }) => theme.mixins.typography.body2};
`;
export const Overline = styled.p`
  ${({ theme }) => theme.mixins.typography.overline};
`;
export const Heading4 = styled.h4`
  ${({ theme }) => theme.mixins.typography.heading4};
`;
export const Heading5 = styled.h5`
  ${({ theme }) => theme.mixins.typography.heading5};
`;
export const Heading6 = styled.h6`
  ${({ theme }) => theme.mixins.typography.heading6};
`;
