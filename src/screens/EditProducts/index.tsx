import React from "react";
import {View} from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision";
import { ImageData } from "../../components/DataProducts/ImageData";
import Header from "../../components/Header";
import { ImageProducts } from "../../components/ScreenEdit/ImageProducts";
import { SelectedProducts } from "../../components/ScreenEdit/SelectedProducts";
import { ValueProducts } from "../../components/ScreenEdit/ValueProducts";



export const EditProducts = () => {
  return(
    <View>
      <Header/>
      <SelectedProducts/>
      <ValueProducts/>
        <ImageProducts/>
        <ButtonDecision/>

    </View>
  )
}