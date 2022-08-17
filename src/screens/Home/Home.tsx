import React from "react";
import { Contanier, TextP } from "../../../styles";
import Header from "../../components/Header";
import { ImageComponents } from "../../components/ImageComponents";
import { ButtonsHome } from "../../components/Buttons/ButtonsHome";    

const Home = () => {
 
  return(
    <Contanier>
      <ImageComponents>
      <Header/>
      <ButtonsHome/>
      </ImageComponents>
    </Contanier>
  )
}

export default Home;
