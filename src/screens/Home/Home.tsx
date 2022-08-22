import React from "react";
import { Contanier  } from "../../../styles";
import Header from "../../components/Header";
import { ImageComponents } from "../../components/ImageComponents";
import { ButtonsHome } from "../../components/Buttons/ButtonsHome";    

const Home = ({navigation}) => {
 
  return(
    <Contanier>
      <ImageComponents>
      <Header/>
      <ButtonsHome navigation={navigation} />
      </ImageComponents>
    </Contanier>
  )
}

export default Home;
