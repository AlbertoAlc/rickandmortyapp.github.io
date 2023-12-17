import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {

  return (
    <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4"
    nextLabel="Next"
    previousLabel="Prev"
    nextClassName="btn btn-light"
    previousClassName="btn btn-light"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    onPageChange={(data)=>{
      setPageNumber(data.selected+1)
    }}
    pageCount={info?.pages}
    />
  );
};

export default Pagination