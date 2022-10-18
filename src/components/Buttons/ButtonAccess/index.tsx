import { useNavigation } from "@react-navigation/native"
import { Text } from "react-native"
import { List } from "react-native-paper"
import PAGES from "../../../constants/pages"
import { NavigationType } from "../../../navigation"
import api from "../../../services/api"
import { 
  Container,
  ButtonAccesPages,
  TextAccesPages, 
} from "./styled"

export const ButtonAccess = () => {
  const navigator = useNavigation<NavigationType>()

  

  //  async function teste() {
  //   try {
  //     const response = await api.get('products');
  //     console.log(response.data);
  //   } catch(error) {
  //     console.log({...error})
  //   }
  // };

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