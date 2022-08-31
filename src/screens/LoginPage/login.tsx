import { Text, View } from "react-native"
import { ButtonDecision } from "../../components/Buttons/ButtonDecision"
import { ImageLogo } from "../../components/ImageLogo"
import { InputLogin } from "../../components/Inputs/InputLogin"
import { TitleDecision } from "../../components/Titles/TitleDecisions"


export const LoginPages = () => {
  return(
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ImageLogo/>
      <TitleDecision>
        Login
      </TitleDecision>
      <InputLogin/>
      <ButtonDecision/>
    </View>
  )
}