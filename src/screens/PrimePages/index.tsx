import React from "react"
import { View } from "react-native"
import { ButtonAccess } from "../../components/Buttons/ButtonAccess"
import { ImageLogo } from "../../components/ImageLogo"
import { ImageTextPrimePages } from "../../components/ImageTextPimePages"

export const PrimePages = () => {
  return(
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ImageLogo/>
      <ImageTextPrimePages/>
      <ButtonAccess/>
    </View>
  )
}