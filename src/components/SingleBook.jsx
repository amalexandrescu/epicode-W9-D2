import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 mx-auto">
      <Card>
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
