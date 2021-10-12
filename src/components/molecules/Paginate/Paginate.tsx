import React, { useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import { usePageParams } from 'hooks/usePageParams';
import { useAppContext } from 'context/AppContext';
import { useSpacecraftListItemProps } from 'api/apiHooks';
import { Wrapper } from './Paginate.styles';

const Paginate = () => {
  const { page, setPageParams } = usePageParams();
  const { data } = useSpacecraftListItemProps();
  const { pagesNumber, setPagesNumber, itemsNumberOnPage } = useAppContext();

  const newPagesNumber = useMemo(
    () => (data ? Math.ceil(data.length / itemsNumberOnPage) : 1),
    [data, itemsNumberOnPage],
  );
  useEffect(() => setPagesNumber(newPagesNumber));

  const onPageChangeHandle = ({ selected }: { selected: number }) => {
    setPageParams(selected + 1);
  };

  return (
    <>
      {Boolean(pagesNumber) && (
        <Wrapper role="navigation">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pagesNumber}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={onPageChangeHandle}
            containerClassName={'pagination'}
            forcePage={Number(page) - 1}
            activeClassName={'active'}
          />
        </Wrapper>
      )}
    </>
  );
};

export default Paginate;
