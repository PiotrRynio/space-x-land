import React, { useState } from 'react';
import {
  LabelWrapper,
  LabelText,
  SearchInput,
  SearchIconContainer,
  InnerWrapper,
  SearchIcon,
  SearchButton,
  BlurWrapper,
  CloseIcon,
} from './Searcher.styles';
import { TypographyTag } from 'components/atoms/Typography/TypographyTags';
import SearchedItemsList from 'components/molecules/SearchedItemsList/SearchedItemsList';
import { useAppContext } from 'context/AppContext';

const Searcher = () => {
  const { searcherInputText, setSearcherInputText } = useAppContext();
  const [isSearcherActive, setIsSearcherActive] = useState(false);

  const resetAndBlurSearcher = () => {
    setSearcherInputText('');
    setIsSearcherActive(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearcherInputText(event.target.value);

  const handleFocus = () => {
    setIsSearcherActive(true);
  };

  const handlerBlurWrapperClick = () => {
    resetAndBlurSearcher();
  };

  const handlerCloseIconClick = () => {
    resetAndBlurSearcher();
  };

  return (
    <>
      <LabelWrapper>
        <InnerWrapper>
          <LabelText typographyTag={TypographyTag.OVERLINE}>Search for a ship</LabelText>
          <SearchInput
            type="text"
            value={searcherInputText}
            onChange={handleChange}
            placeholder={`enter the model`}
            onFocus={handleFocus}
          />
        </InnerWrapper>
        <SearchButton onClick={handlerCloseIconClick}>
          <SearchIconContainer isSearcherActive={isSearcherActive}>
            {isSearcherActive ? <CloseIcon /> : <SearchIcon />}
          </SearchIconContainer>
        </SearchButton>
        {isSearcherActive && <SearchedItemsList resetAndBlurSearcher={resetAndBlurSearcher} />}
      </LabelWrapper>
      <BlurWrapper onClick={handlerBlurWrapperClick} isSearcherActive={isSearcherActive} />
    </>
  );
};

export default Searcher;
