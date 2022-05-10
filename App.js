import React from 'react'
import styled from "styled-components";
import Movie from "./components/Movie";
import Rodape from './components/Rodape';
import Titulo from "./components/Titulo";



function App() {
  return (
    <>
    <Filmes>
      <Titulo nome="Acervo de filmes" />
    </Filmes>
    <Movie />
    <Rodape />
    </>
);
}

const Filmes = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #4D77FF;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
