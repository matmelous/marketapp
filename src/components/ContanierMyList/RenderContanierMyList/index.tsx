import { 
  View, 
  FlatList,
  Text, 
} from "react-native"
import { ContanierMyList } from ".."
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
        <ButtonDelete>
          <TitleButtonDelete>
            Excluir
          </TitleButtonDelete>
        </ButtonDelete>
      </BoxMyList>
    </View>
  )
}