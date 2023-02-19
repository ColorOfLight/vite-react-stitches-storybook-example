import { useState } from "react";
import { styled } from "@/stitches.config";

const AppStyled = styled('div', {
  maxWidth: 1200,
  margin: "0 auto",
  textAlign: "center",
  paddingTop: 32
})

const CountButtonStyled = styled('button', {
  fontSize: 24,
  border: 0,
  color: "#222222",
  backgroundColor: "#bdbdbd",
  padding: "12px 24px",
  borderRadius: 8,
  "&:hover": {
    backgroundColor: "#aaaaaa",
  }
})

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppStyled>
      <CountButtonStyled onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </CountButtonStyled>
    </AppStyled>
  );
}

export default App;
