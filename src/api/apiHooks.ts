import { useQuery, UseQueryResult } from 'react-query';
import { SpacecraftListItemProps } from 'components/molecules/SpacecraftListItem/SpacecraftListItemProps';
import { SpacecraftListItemDto } from './SpacecraftListItemDto';
const API_URL = 'https://api.spacex.land/rest/launches';

export enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  NOT_FOUND = 'NOT_FOUND',
}

export const useSpacecraftListItemProps = (
  limit = 12,
): UseQueryResult<SpacecraftListItemProps[], unknown> =>
  useQuery(['SpacecraftListItemProps'], async () => {
    const response = await fetch(`${API_URL}?limit=${limit}`);
    await validateResponse(response);
    const fetchedData = await response.json();

    return fetchedData.map((item: SpacecraftListItemDto) => ({
      id: item.id,
      date: new Date(item.launch_date_utc).toLocaleDateString('en-GB', { dateStyle: 'short' }),
      title: item.mission_name,
      articleText: item.details,
      buttonLinkUrl: item.links.wikipedia,
      imageUrl: item.links.flickr_images[0] || item.links.mission_patch,
    }));
  });

const validateResponse = async (response: Response) => {
  if (!response.ok) {
    const errorResponse = await response.json();
    if (errorResponse.status === 404) {
      throw new Error(ErrorCodes.NOT_FOUND);
    }
    throw new Error(ErrorCodes.NETWORK_ERROR);
  }
};
