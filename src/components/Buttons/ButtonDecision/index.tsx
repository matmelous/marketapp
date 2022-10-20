
import PAGES from "../../../constants/pages"
import { 
  Button, 
  DecisionContainer,
  TitleButtonDecision,
} from "./styled"

type Props = {
  onPress: () => void  ;
}

  export const ButtonDecision = ({ onPress }: Props ) => {
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
        onPress={onPress}
      >
        <TitleButtonDecision>
          CONTINUAR
        </TitleButtonDecision>
      </Button>
    </DecisionContainer>
  )
}