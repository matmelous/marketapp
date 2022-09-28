import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
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
import User from "../../back-end/models/User"

export const CadastroPages = () => {

  const navigation = useNavigation<NavigationType>()
  const [email, setEmail ] = useState()
  const [senha,  setSenha ] =  useState()

  User.create({
    email: email,
    senha: senha
  })

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
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInput
          placeholder="SENHA"
          value={senha}
          onChangeText={setSenha}
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