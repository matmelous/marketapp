import React from "react";
import { Contanier } from "../../styles";
import ButtonHome from "../components/Buttons";
import Header from "../components/Header";

const Home = () => {
  return(
    <Contanier>
      <Header/>
      <ButtonHome/>
    </Contanier>
  )
}

export default Home;