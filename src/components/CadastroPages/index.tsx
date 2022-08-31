import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { 
  View,
} from "react-native";
import PAGES from "../../constants/pages";
import { NavigationType } from "../../navigation";
import {
  Imagem,
  Viewlogo,
  Registration,
  Title,
  InputConteiner,
  EmailInput,
  PasswordInput,
  ConfirmPassword,
  ButtonsContainer,
  CancelButton,
  ContinueButton,
  CancelText,
  ContinueText,
} from "./style"

export const CadastroPages = () => {

  const navigation = useNavigation<NavigationType>()

  return (
    <View>
      <Viewlogo>
        <Imagem 
        source={require('../../assets/images/login.png')} 
        height={200} 
        width={242}
      />
      </Viewlogo>
      <Registration>
        <Title>
          Cadastro
        </Title>
      </Registration>
      <InputConteiner>
        <EmailInput
          placeholder="EMAIL"
        />
        <PasswordInput
          placeholder="SENHA"
        />
        <ConfirmPassword
          placeholder="CONFIRMAR SENHA"
        />
      </InputConteiner>
      <ButtonsContainer>
        <CancelButton>
          <CancelText 
            onPress={() => navigation.navigate(PAGES.PRIMEPAGES)}
          >
            CANCELAR
          </CancelText>
        </CancelButton>
        <ContinueButton>
          <ContinueText>
            CONTINUAR
          </ContinueText>
        </ContinueButton>
      </ButtonsContainer>
    </View>
  )
}