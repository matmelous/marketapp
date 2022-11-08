
import { View } from "react-native"
import { Content, Title, InputChange } from "./styled"
type Props = {
  placeholder :String
  onChangeText : (text) => void
  }

export const ValueProducts = ({placeholder, onChangeText}: Props) => {

return (
  <Content>
    <Title>Valor do produto</Title>
    <InputChange
      onChangeText = {onChangeText}
      placeholder= {placeholder}
    />
  </Content>
  )
}