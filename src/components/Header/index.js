import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Container } from "./styles";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push("/");
  }

  const { onToggleTheme, selectedTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
      <button onClick={handleNavigate} style={{ color: "#fff" }}>
        Voltar para a home
      </button>
    </Container>
  );
}
