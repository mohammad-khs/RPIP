const UserLoadMore = ({ query }) => {
  return (
    <>
      <button
        onClick={() => query.fetchNextPage()}
        disabled={
          query.data.pages.length * 10 >=
          query.data.pages[0].data[0].user.total_photos
        }
        className="btn btn-dark mt-3 p-3 col-12 rounded-0"
      >
        {query.isFetchingNextPage
          ? "loading"
          : query.data.pages.length * 10 <=
            query.data.pages[0].data[0].user.total_photos
          ? "load more"
          : "nothing to load"}
      </button>
    </>
  );
};

export default UserLoadMore;
