import { Button } from "react-native";
import { 
  View,
  Image, 
  TouchableOpacity,
  LogBox,
  Text,
  TextInput,
} from "react-native";

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

export const LogPage = () => {
  return (

    <View>
      <Viewlogo>
        <Imagem source={require('../../assets/images/login.png')} height={200} width={242}/>
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
        <CancelText>CANCELAR</CancelText>
      </CancelButton>
      <ContinueButton>
        <ContinueText>CONTINUAR</ContinueText>
      </ContinueButton>
      </ButtonsContainer>
    </View>
  )
}