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

const Searcher = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const onClickButton = () => {};

  return (
    <LabelWrapper>
      <InnerWrapper>
        <LabelText typographyTag={TypographyTag.OVERLINE}>Search for a ship</LabelText>
        <SearchInput
          type="text"
          value={textInput}
          onChange={handleChange}
          placeholder={`enter the model`}
        />
      </InnerWrapper>
      <SearchButton onClick={onClickButton}>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchButton>
    </LabelWrapper>
  );
};

export default Searcher;
