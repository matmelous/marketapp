import { 
  Container, Input 
} from "./styled"



export const InputLogin = ({ valueEmail, onChangeTextEmail, valueSenha, onChangeTextSenha}) => {

  

  return(
    <Container>
      <Input 
        type="email"
        placeholder="EMAIL"
        value={valueEmail}
        onChangeText={onChangeTextEmail}
      />
      <Input
        type="password"
        placeholder="SENHA"
        value={valueSenha}
        onChangeText={onChangeTextSenha}
      />
    </Container>
  )
}