import { 
  Container, Input 
} from "./styled"

export const InputLogin = () => {
  return(
    <Container>
      <Input 
        placeholder="EMAIL"
      />
      <Input
        placeholder="SENHA"
      />
    </Container>
  )
}