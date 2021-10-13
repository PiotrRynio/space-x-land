import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

export const usePageParams = () => {
  const location = useLocation();
  const history = useHistory();
  const parsedSearch = queryString.parse(location.search);

  const values = {
    page: String(parsedSearch.page ?? '1'),
  };

  const setPageParams = (newPageNumber: number) => {
    const newValues = {
      page: String(newPageNumber),
    };

    const parsedNewValues = queryString.stringify(
      { ...values, ...newValues },
      { skipEmptyString: true },
    );
    history.push(location.pathname + '?' + parsedNewValues);
  };

  return { ...values, setPageParams };
};
