import { Image, View } from "react-native"
import { 
  Container,
  ButtonFilter,
  TitleButtonFilter,
  ValueResult
} from "./styled"

export const ButtonFilterMarket = () => {
  return(
    <Container>
      <ButtonFilter>
        <View 
          style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <TitleButtonFilter>
            Condor
          </TitleButtonFilter>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <ValueResult>
              Valor total:{'  '}
            </ValueResult>
            <ValueResult
              result={true}
            >
              R$550,25
            </ValueResult>
          </View>
        </View>
        <Image source={require('../../../assets/images/vitor.png')}/>
      </ButtonFilter>
    </Container>
  )
}