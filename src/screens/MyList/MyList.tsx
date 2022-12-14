import Header from "../../components/Header"
import { View } from "react-native"
import { RenderContanierMyList } from "../../components/ContanierMyList/RenderContanierMyList"
import { FilterButton } from "../../components/Buttons/FilterButton";


export const MyList = () => {

  return(
    <View 
      style={{
        height: '100%',
      }}
    >
        <Header/>
        <RenderContanierMyList/>
        <View
          style={{
            position: 'absolute',
            right: 15,
            bottom: 15,
          }}
        >
          <FilterButton/>
        </View>
    </View>
  )
}
