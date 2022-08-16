import React from "react";
import {View} from "react-native";
import { Contanier, TextP } from "../../styles";
import Header from "../components/Header";

const Home = () => {
  return(
    <Contanier>
      <Header/>
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextP >
          Quer ecomomizar no supermercado? 
          O aplicativo 
          mostra estabelecimentos mais baratos para você!
        </TextP>
      </View>
    </Contanier>
  )
}

export default Home;