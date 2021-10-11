import React from 'react';
import { StyledText } from './FetchingInformation.styles';

export type FetchingInformationTextProps = {
  error: unknown;
  isLoading: boolean;
};

const FetchingInformation = ({ error, isLoading }: FetchingInformationTextProps) => {
  if (error) {
    return <StyledText>Api error...</StyledText>;
  }
  if (isLoading) {
    return <StyledText>Loading...</StyledText>;
  }
  return <></>;
};

export default FetchingInformation;
