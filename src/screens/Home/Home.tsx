import React from "react";
import { Contanier, TextP } from "../../../styles";
import Header from "../../components/Header";
import { ImageComponents } from "../../components/ImageComponents";
import { ButtonsHome } from "../../components/Buttons/ButtonsHome";    

const Home = ({props}) => {
 
  return(
    <Contanier>
      <ImageComponents>
      <Header/>
      <ButtonsHome navigation={props}/>
      </ImageComponents>
    </Contanier>
  )
}

export default Home;
