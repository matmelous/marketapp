
import { View } from "react-native"
import { Content, Title, ContentTitle, Text} from "./styled"
type Props = {
label :String
}

export const SelectedProducts = ({label}: Props) => {

return (
  <Content>
    <Title>Produto selecionado</Title>
    <ContentTitle>
      <Text>
        {label}
      </Text>
    </ContentTitle>
  </Content>
  )
}