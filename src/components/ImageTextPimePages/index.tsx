import { Image } from "react-native"
import {
  Container
} from "./styled"

export const ImageTextPrimePages = () => {
  return(
    <Container>
      <Image
        source={require('../../assets/images/imageText.png')}
      />
    </Container>
  )
}