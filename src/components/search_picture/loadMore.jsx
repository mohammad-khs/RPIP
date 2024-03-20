const LoadMore = ({ query }) => {
  return (
    <>
      <button
        onClick={() => query.fetchNextPage()}
        disabled={
          query.data.pages.length >= query.data.pages[0].data.total_pages
        }
        className="btn btn-outline-dark mt-2 col-12 rounded-0"
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
