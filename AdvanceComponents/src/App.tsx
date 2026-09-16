// import Input from "./components/Input";
import { useRef } from "react";
// import Button from "./components/Button2";
// import Container from "./components/Container";
import Input from "./components/InputRef";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    // <main>
    //   <div>
    //     <Input label="Your Name" id="name" type="text" />
    //     <Input label="Your Age" id="age" type="number" />
    //   </div>
    //   <p>
    //     <Button el="button">A Button</Button>
    //   </p>
    //   <p>
    //     <Button el="anchor" href="https://google.com">
    //       A Link
    //     </Button>
    //   </p>
    // </main>
    // <main>
    //    <Container as={Button} onClick={() => {}} type="button">
    //   Click me
    //  </Container>
    // </main>

    <main>
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}

export default App;
