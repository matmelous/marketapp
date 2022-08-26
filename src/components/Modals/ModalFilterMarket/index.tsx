import { Modal } from "react-native"
import { ButtonFilterMarket } from "../../Buttons/ButtonFilterMarket";
import {
  Container,
  BoxContainer,
  TitleBoxContainer,
  ButtonBestMarketItem,
  TitleButtonItem
} from "./styled"

type Props = {
  isVisible: boolean;
  hideModal: () => void;
}

export const ModalFilterMarket = ({ isVisible, hideModal }: Props) => {
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <Container> 
        <BoxContainer>
          <TitleBoxContainer>
            O melhor mercado para fazer a compra de
            sua lista com economia será:
          </TitleBoxContainer>
          <ButtonFilterMarket/>
          <TitleBoxContainer>
            Ou
          </TitleBoxContainer>  
          <ButtonBestMarketItem
          >
          <TitleButtonItem
            onPress={hideModal}
          >
            Melhor marcado para cada item
          </TitleButtonItem>
          </ButtonBestMarketItem>
        </BoxContainer>
      </Container>
    </Modal>
  )
}