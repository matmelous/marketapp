import { Image } from "react-native"
import { Container } from "./styled"


export const ImageLogo = () => {
  return(
    <Container>
      <Image 
        source={require('../../assets/images/login.png')} 
        height={200} 
        width={242}
      />
    </Container>
  )
}