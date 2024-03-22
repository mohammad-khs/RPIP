const LoadMore = ({ query }) => {
  return (
    <>
      <button
        onClick={() => query.fetchNextPage()}
        disabled={
          query.data.pages.length >= query.data.pages[0].data.total_pages
        }
        className="btn btn-dark h1 p-3 mb-0 mt-3 col-12 rounded-0"
      >
        {query.isFetchingNextPage
          ? "loading"
          : query.data.pages.length <= query.data.pages[0].data.total_pages
          ? "load more"
          : "nothing to load"}
      </button>
    </>
  );
};

export default LoadMore;
