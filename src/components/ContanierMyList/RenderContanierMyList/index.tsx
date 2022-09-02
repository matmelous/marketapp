import { useState } from "react"
import { 
  View, 
} from "react-native"
import { ContanierMyList } from ".."
import ModalDelete from "../../Modals/ModalDelete"
import { 
  BoxMyList, 
  ButtonDelete,
  BoxView,
  TitleButtonDelete,
} from "./styled"
import list from "../../../data/Products.json"
import { SearchBarProduct } from "../../Searchs/SearchBar"
import { ComponentError } from "../../ComponentError"

export const RenderContanierMyList = () => {

  const [isModalInstrumentVisible, setIsModalInstrumentVisible] = useState(false);
  const [ busca, setBusca ] = useState('') 
  const resultado = busca === "" ? list : list.filter((data) => {
    if (data.produtos.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
         return true 
       } 
         return false
   })

  return(
    <View style={{width: '100%', padding:16}}>
      <SearchBarProduct 
        value={busca} 
        onChangeText={setBusca}
      />
      <View style={{alignItems: 'center'}}>
        {resultado.length === 0 ? <ComponentError/> : resultado.map((data) => {
          return <BoxMyList
            key={data.produtos}
          >
            <BoxView>
              <ContanierMyList 
                Produto={data.produtos} 
                Marca={data.marca} 
                valor={data.Valor} 
                mercado={data.mercado} 
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
        })}
          <ModalDelete
            isVisible={isModalInstrumentVisible}
            hideModal={() => setIsModalInstrumentVisible(false)} />
      </View>
    </View>
  )
}