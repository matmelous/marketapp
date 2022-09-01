import { useNavigation } from "@react-navigation/native"
import PAGES from "../../../constants/pages"
import { NavigationType } from "../../../navigation"
import { 
  Button, 
  DecisionContainer,
  TitleButtonDecision,
} from "./styled"

  export const ButtonDecision = () => {

  const navigator = useNavigation<NavigationType>()

  return(
    <DecisionContainer>
      <Button
        background={true}
      >
        <TitleButtonDecision>
          CANCELAR
        </TitleButtonDecision>
      </Button>  
      <Button
         onPress={() => navigator.navigate(PAGES.MAIN)}
      >
        <TitleButtonDecision>
          CONTINUAR
        </TitleButtonDecision>
      </Button>
    </DecisionContainer>
  )
}