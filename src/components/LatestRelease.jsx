import { Container, Row } from "react-bootstrap";
import romance from "../data/books/romance.json";
import SingleBook from "./SingleBook";

const LatestRelease = () => {
  return (
    <Container>
      <h2>Romance books</h2>
      <Row>
        {romance.map((book) => {
          return <SingleBook book={book} key={book.asin} />;
        })}
      </Row>
    </Container>
  );
};

export default LatestRelease;
