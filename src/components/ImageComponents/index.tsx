import * as React from "react";
import { View, ImageBackground } from 'react-native';

type props = {
  children: React.ReactNode;
};
export const ImageComponents = ({ children }) => {
  return(
    <View>
      <ImageBackground
        source={
          require('../../assets/images/carrinho.png')
        }
        style={{width: "100%", height: "100%"}}
      > 
       {children} 
      </ImageBackground>
    </View>
  )
}