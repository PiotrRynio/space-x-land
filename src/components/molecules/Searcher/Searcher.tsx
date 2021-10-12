import React, { useState } from 'react';
import {
  LabelWrapper,
  LabelText,
  SearchInput,
  SearchIconContainer,
  InnerWrapper,
  SearchIcon,
  SearchButton,
} from './Searcher.styles';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import SearchedItemsList from 'components/molecules/SearchedItemsList/SearchedItemsList';
import { useAppContext } from '../../../context/AppContext';

const Searcher = () => {
  const { searcherInputText, setSearcherInputText } = useAppContext();
  const [isSearcherActive, setIsSearcherActive] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearcherInputText(event.target.value);

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearcherActive(true);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearcherActive(false);
  };

  return (
    <LabelWrapper>
      <InnerWrapper>
        <LabelText typographyTag={TypographyTag.OVERLINE}>Search for a ship</LabelText>
        <SearchInput
          type="text"
          value={searcherInputText}
          onChange={handleChange}
          placeholder={`enter the model`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </InnerWrapper>
      <SearchButton>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchButton>
      {isSearcherActive && <SearchedItemsList />}
    </LabelWrapper>
  );
};

export default Searcher;
