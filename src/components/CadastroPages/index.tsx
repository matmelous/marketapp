import {
  Title,
  InputData,
  Content
} from "./style"

type Props = {
  onChangeTextUser: (text) => void;
  onChangeTextEmail: (text) => void;
  onChangeTextPassowords: (text) => void;
  onChangeTextConfirm: (text) => void;
}

export const CadastroPages = ({
  onChangeTextUser,
  onChangeTextEmail,
  onChangeTextPassowords,
  onChangeTextConfirm
}: Props) => {
  return (
    <Content>
      <Title>
        Cadastro
      </Title>
      <InputData
        placeholder="USER"
        onChangeText={onChangeTextUser}
      />
      <InputData
        placeholder="EMAIL"
        onChangeText={onChangeTextEmail}
      />
      <InputData
        placeholder="SENHA"
        onChangeText={onChangeTextPassowords}
      />
      <InputData
        placeholder="CONFIRME SUA SENHA"
        onChangeText={onChangeTextConfirm}
      />
    </Content>
  )
}