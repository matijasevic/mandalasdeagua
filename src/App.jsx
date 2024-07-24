import { Container } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container
      fluid
      className="m-0 p-0 d-flex justify-content-center flex-column"
    >
      <Layout>
        <ItemListContainer />
      </Layout>
    </Container>
  );
}

export default App;
