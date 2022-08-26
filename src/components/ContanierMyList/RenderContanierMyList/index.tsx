import { useState } from "react"
import { 
  View, 
  FlatList,
} from "react-native"
import { ContanierMyList } from ".."
import ModalDelete from "../../Modals/ModalDelete"
import { 
  BoxMyList, 
  ButtonDelete,
  BoxView,
  TitleButtonDelete,
} from "./styled"

const list = 
[
  {
    id: 1,
    label: 'Produto:',
    value: 'Macarrao Casaredo Com Ovos',
  },
  {
    id: 2,
    label: 'Marca:',
    value: 'Cracolino',
  },
  {
    id: 3,
    label: 'Valor:',
    value: '3,85',
  },
  {
    id: 4,
    label: 'Mercado:',
    value: 'Condor',
  }
]

export const RenderContanierMyList = () => {

  const [isModalInstrumentVisible, setIsModalInstrumentVisible] = useState(false);

  return(
    <View style={{alignItems: 'center'}}>
      <BoxMyList>
        <BoxView>
          <FlatList 
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ContanierMyList data={item}/>}
          />
        </BoxView>
        <ButtonDelete
          onPress={() => setIsModalInstrumentVisible(true)}
        >
          <TitleButtonDelete>
            Excluir
          </TitleButtonDelete>
        </ButtonDelete>
      </BoxMyList>
      <ModalDelete 
        isVisible={isModalInstrumentVisible} 
        hideModal={() => setIsModalInstrumentVisible(false)}    
      />
    </View>
  )
}