import Button from "../components/UI/Button2.tsx";
import Container from "../components/UI/Container.tsx";

function App() {
  return (
    <main>
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
