import { Container, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Container fluid style={{ height: '100vh' }}>
      <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Link to="/articles" style={{
            display: "inline-block",
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "blue",
          }}>
          Click to View
        </Link>
      </Flex>
    </Container>
  );
};

export default App;

