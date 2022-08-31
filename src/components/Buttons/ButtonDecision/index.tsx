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
        onPress={() => navigator.navigate(PAGES.MAIN)}
      >
        <TitleButtonDecision>
          CANCELAR
        </TitleButtonDecision>
      </Button>  
      <Button>
        <TitleButtonDecision>
          CONTINUAR
        </TitleButtonDecision>
      </Button>
    </DecisionContainer>
  )
}