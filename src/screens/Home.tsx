import React from "react";
import {View} from "react-native";

import { Contanier, TextP } from "../../styles";
import ButtonHome from "../components/Buttons";
import Header from "../components/Header";

const Home = () => {
  return(
    <Contanier>
      <Header/>
      <View style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextP>
          Quer ecomomizar no supermercado? 
          O aplicativo <span style={{color: "#6691FF", fontSize: "24px", fontFamily: "Faster One"}}>MELHOR MERCADO</span> 
          <br/>
          mostra estabelecimentos mais baratos para você!
        </TextP>
      </View>
      <ButtonHome/>
    </Contanier>
  )
}

export default Home;