import React from 'react';
import {
  ListItem,
  ListItemImage,
  ListItemLink,
  ListItemTitle,
  Wrapper,
} from './SearchedItemsList.styles';
import { TypographyTag } from '../../atoms/Typography/TypographyTags';
import { useSpacecraftListItemProps } from '../../../api/apiHooks';
import { SpacecraftListItemProps } from '../SpacecraftListItem/SpacecraftListItemProps';
import iconLoading from 'assets/images/icon-loading.png';
import iconSad from 'assets/images/icon-sad.png';
import { useAppContext } from '../../../context/AppContext';
import { normalizeAndSquashText } from 'utils/normalizeAndSquashText';

type SearchedItemsListProps = {
  resetAndBlurSearcher: () => void;
};

const SearchedItemsList = ({ resetAndBlurSearcher }: SearchedItemsListProps) => {
  const { isLoading, error, data } = useSpacecraftListItemProps();
  const { searcherInputText } = useAppContext();

  const filteredISearchedItems = data
    ?.filter(({ title }: SpacecraftListItemProps) =>
      searcherInputText
        ? normalizeAndSquashText(title).includes(normalizeAndSquashText(searcherInputText))
        : true,
    )
    .filter((searchedItem: SpacecraftListItemProps, index: number) => index < 4)
    .map(({ imageUrl, title, externalLinkUrl }: SpacecraftListItemProps, index) => (
      <ListItem key={index}>
        <ListItemLink
          href={externalLinkUrl}
          onClick={(event) => handleListItemClick(event, externalLinkUrl)}
        >
          <ListItemImage imageUrl={imageUrl} />
          <ListItemTitle typographyTag={TypographyTag.BODY_1}>{title}</ListItemTitle>
        </ListItemLink>
      </ListItem>
    ));

  const alternativeInformation = () => {
    const alternativeText = () => {
      if (error) {
        return 'Api error.';
      } else if (isLoading) {
        return 'Loading...';
      } else if (!filteredISearchedItems?.length) {
        return 'No results found.';
      }
      return undefined;
    };

    if (!alternativeText()) {
      return undefined;
    }
    return (
      <ListItem>
        <ListItemLink>
          <ListItemImage imageUrl={isLoading ? iconLoading : iconSad} />
          <ListItemTitle typographyTag={TypographyTag.BODY_1}>{alternativeText()}</ListItemTitle>
        </ListItemLink>
      </ListItem>
    );
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    externalLinkUrl: string,
  ) => {
    event.preventDefault();
    resetAndBlurSearcher();
    window.open(externalLinkUrl, '_blank');
  };

  return (
    <Wrapper>
      {filteredISearchedItems}
      {alternativeInformation()}
    </Wrapper>
  );
};

export default SearchedItemsList;
