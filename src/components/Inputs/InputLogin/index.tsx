import { 
  Container, Input
} from "./styled"

import React from "react"


type Props = {
  onChangeTextEmail: (text) => void;
  onChangeTextPassword: (text) => void;
}

export const InputLogin = ({
  onChangeTextEmail,
  onChangeTextPassword
}: Props) => {


  return(
    <Container>
      <Input
        placeholder="Digite seu Email"
        onChangeText={onChangeTextEmail}
      />  
      <Input
        placeholder="Digite sua senha"
        onChangeText={onChangeTextPassword}
      />  
    </Container>    
  )
}