import React from 'react';
import {
  Background,
  Image,
  Wrapper,
  InnerWrapper,
  StyledBody1,
  StyledOverline,
  StyledHeading6,
  StyledButton,
} from './SpacecraftListItem.styles';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import { SpacecraftListItemProps } from './SpacecraftListItemProps';

const SpacecraftListItem = ({
  articleText,
  externalLinkUrl,
  date,
  title,
  imageUrl,
}: SpacecraftListItemProps) => {
  return (
    <Wrapper>
      <Background />
      <InnerWrapper>
        <Image imageUrl={imageUrl} />
        <StyledOverline typographyTag={TypographyTag.OVERLINE}>{date}</StyledOverline>
        <header>
          <StyledHeading6 typographyTag={TypographyTag.HEADING_6}>{title}</StyledHeading6>
        </header>
        <StyledBody1 typographyTag={TypographyTag.BODY_1}>
          {articleText || 'No information in our API'}
        </StyledBody1>
        <StyledButton href={externalLinkUrl}>
          <span>Read more</span>
        </StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SpacecraftListItem;
