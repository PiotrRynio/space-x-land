import React from 'react';
import { useSpacecraftListItemProps } from 'api/apiHooks';
import { useAppContext } from 'context/AppContext';
import { usePageParams } from 'hooks/usePageParams';
import SpacecraftListItem from 'components/molecules/SpacecraftListItem/SpacecraftListItem';
import { SpacecraftListItemProps } from 'components/molecules/SpacecraftListItem/SpacecraftListItemProps';
import FetchingInformation from 'components/atoms/FetchingInformation/FetchingInformation';
import { Wrapper } from './SpacecraftList.styles';

const SpacecraftList = () => {
  const { isLoading, error, data } = useSpacecraftListItemProps();
  const { itemsNumberOnPage } = useAppContext();
  const { page } = usePageParams();

  const itemsOnPageFilter = (spacecraftItem: SpacecraftListItemProps, index: number) => {
    const minIndex = (Number(page) - 1) * itemsNumberOnPage;
    const maxIndex = Number(page) * itemsNumberOnPage - 1;
    if (index >= minIndex && index <= maxIndex) return spacecraftItem;
  };

  const OnePageOfSpacecraftList =
    data &&
    data
      .filter(itemsOnPageFilter)
      .map((spacecraftDataItem) => (
        <SpacecraftListItem key={spacecraftDataItem.id} {...spacecraftDataItem} />
      ));

  return (
    <Wrapper>
      <FetchingInformation error={error} isLoading={isLoading} />
      {OnePageOfSpacecraftList}
    </Wrapper>
  );
};

export default SpacecraftList;
