import React from 'react';
import { TypographyTag } from './TypographyTags';
import { Body1, Body2, Overline, Heading4, Heading5, Heading6 } from './Typography.styles';
export type TypographyProps = {
  typographyTag: TypographyTag;
  children: React.ReactNode;
};

const renderTypography = ({ typographyTag, children, ...props }: TypographyProps) => {
  switch (typographyTag) {
    case TypographyTag.BODY_1:
      return <Body1 {...props}>{children}</Body1>;
    case TypographyTag.BODY_2:
      return <Body2 {...props}>{children}</Body2>;
    case TypographyTag.OVERLINE:
      return <Overline {...props}>{children}</Overline>;
    case TypographyTag.HEADING_4:
      return <Heading4 {...props}>{children}</Heading4>;
    case TypographyTag.HEADING_5:
      return <Heading5 {...props}>{children}</Heading5>;
    case TypographyTag.HEADING_6:
      return <Heading6 {...props}>{children}</Heading6>;
    default:
      return <p>{children}</p>;
  }
};

export const Typography = (props: TypographyProps) => {
  return renderTypography(props);
};

export default Typography;
