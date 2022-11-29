import { useState } from "react"
import { 
  ScrollView,
  View, 
} from "react-native"
import { ContanierMyList } from ".."
import ModalDelete from "../../Modals/ModalDelete"
import { 
  BoxMyList, 
  ButtonDelete,
  BoxView,
  TitleButtonDelete,
  Scroll,
} from "./styled"
// import list from "../../../data/Products.json"
import { SearchBarProduct } from "../../Searchs/SearchBar"
import { ComponentError } from "../../ComponentError"

export const RenderContanierMyList = () => {
  const [ list] = useState([
    {
      produtos: "Adoçante",
      marca: "Tal e Qual",
      peso: "660gr",
      Valor: "13,11un",
      mercado: "Supemercado Condor",
      status: 3
    },{
      produtos: "Arroz Branco",
      marca: "Copagro",
      peso: "5kg",
      Valor: "19,49un",
      mercado: "Supemercado Vitor",
      status: 2
    },{
      produtos:"feijão preto",
      marca: "pontarolo",
      peso:"1kg",
      Valor:"5,85",
      mercado: "Supemercado Condor",
      status: 1
    },
    {
      produtos: "Adoçante",
      marca: "Tal e Qual",
      peso: "660gr",
      Valor: "13,11un",
      mercado: "Supemercado Condor",
      status: 3
    },
    {
      produtos: "Adoçante",
      marca: "Tal e Qual",
      peso: "660gr",
      Valor: "13,11un",
      mercado: "Supemercado Condor",
      status: 3
    },
  ])
  const [isModalInstrumentVisible, setIsModalInstrumentVisible] = useState(false);
  const [ busca, setBusca ] = useState('') 
  const resultado = busca === "" ? list : list.filter((data) => {
    if (data.produtos.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
        return true 
       }
        return false
   })

  function excluir({data}) {
    list.splice(data.status)
    setIsModalInstrumentVisible(false)
  }
  return(
    <View style={{width: '100%', height:'80%', padding:16}}>
      <SearchBarProduct 
        value={busca} 
        onChangeText={setBusca}
      />
      <Scroll
      
      contentContainerStyle = {{alignItems:"center"}}>
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
            hideModal={() => setIsModalInstrumentVisible(false)}
            onclick={() => excluir} 
          />
      </Scroll>
    </View>
  )
}