import React from "react";
import logo from "./logo.svg";
import { StyledHeader, SearchField } from "./style";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt={"Burguer kenzie logo"} />
      <SearchField>
        <input type={"text"} placeholder={"Digitar pesquisa"}></input>
        <button>Pesquisar</button>
      </SearchField>
    </StyledHeader>
  );
}

export default Header;
