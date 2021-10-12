import React from 'react';
import { ListItem, ListItemImage, ListItemTitle, Wrapper } from './SearchedItemsList.styles';
import { TypographyTag } from '../../atoms/Typography/TypographyTags';
import { useSpacecraftListItemProps } from '../../../api/apiHooks';
import { SpacecraftListItemProps } from '../SpacecraftListItem/SpacecraftListItemProps';
import iconLoading from 'assets/images/icon-loading.png';
import iconSad from 'assets/images/icon-sad.png';
import { useAppContext } from '../../../context/AppContext';

const normalizedText = (text: string): string => text.trim().toLowerCase().replaceAll(' ', '');

const SearchedItemsList = () => {
  const { isLoading, error, data } = useSpacecraftListItemProps();
  const { searcherInputText } = useAppContext();

  const filteredISearchedItems = data
    ?.filter(({ title }: SpacecraftListItemProps) =>
      searcherInputText ? normalizedText(title).includes(normalizedText(searcherInputText)) : true,
    )
    .filter((searchedItem: SpacecraftListItemProps, index: number) => index < 4)
    .map(({ imageUrl, title, externalLinkUrl }: SpacecraftListItemProps, index) => (
      <ListItem key={index}>
        <ListItemImage imageUrl={imageUrl} />
        <ListItemTitle typographyTag={TypographyTag.BODY_1}>{title}</ListItemTitle>
      </ListItem>
    ));

  const alternativeInformation = () => {
    const alternativeText = () => {
      if (error) {
        return 'Api error.';
      }
      if (isLoading) {
        return 'Loading...';
      }
      if (!data) {
        return 'No results found.';
      }
      return undefined;
    };

    if (!alternativeText()) {
      return undefined;
    }
    return (
      <ListItem>
        <ListItemImage imageUrl={isLoading ? iconLoading : iconSad} />
        <ListItemTitle typographyTag={TypographyTag.BODY_1}>{alternativeText()}</ListItemTitle>
      </ListItem>
    );
  };

  return (
    <Wrapper>
      {filteredISearchedItems}
      {alternativeInformation()}
    </Wrapper>
  );
};

export default SearchedItemsList;
