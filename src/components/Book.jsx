
const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, img, author, pages, freeBookmark } = props;
  return (
    <div className="container">
      <div className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>Free: {freeBookmark ? 'Yes': 'No'}</p>
      </div>
    </div>
  );
};
export default Book