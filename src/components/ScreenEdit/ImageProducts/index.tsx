import { ImageData } from "../../DataProducts/ImageData"
import { View } from "react-native"
import { Content, Title } from "./styled"


export const ImageProducts = () => {

return (
  <Content>
    <Title>imagem do produto</Title>
    <ImageData label="Adicione uma nova imagem"/>
  </Content>
  )
}