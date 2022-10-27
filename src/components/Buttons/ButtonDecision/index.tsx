
import PAGES from "../../../constants/pages"
import { 
  Button, 
  DecisionContainer,
  TitleButtonDecision,
} from "./styled"

type Props = {
  onPress?: () => void;
  onPressCancel?: () => void;
}

  export const ButtonDecision = ({ onPress, onPressCancel }: Props ) => {
  return(
    <DecisionContainer>
      <Button
        onPress={onPressCancel}
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