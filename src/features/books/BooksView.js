import { useSelector } from "react-redux";

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    console.log(books)
    return (
        <div>
            <h2>list of books</h2>
            <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    {/* <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link> */}
                    {/* <button
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
        </div>
    );
};

export default BooksView;