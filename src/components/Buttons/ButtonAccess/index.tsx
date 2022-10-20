import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"
import { List } from "react-native-paper"
import PAGES from "../../../constants/pages"
import { NavigationType } from "../../../navigation"
import { 
  Container,
  ButtonAccesPages,
  TextAccesPages, 
} from "./styled"

export const ButtonAccess = () => {
  const navigator = useNavigation<NavigationType>()



  return(
    <Container>
      <ButtonAccesPages 
        onPress={() => navigator.navigate(PAGES.LOGIN)}
        
      >
        <TextAccesPages>
          Login
        </TextAccesPages>
      </ButtonAccesPages>
      <ButtonAccesPages 
        onPress={() => navigator.navigate(PAGES.REGISTRATIO)}
      >
        <TextAccesPages>
          Cadastro
        </TextAccesPages>
      </ButtonAccesPages>
    </Container>
  )
}