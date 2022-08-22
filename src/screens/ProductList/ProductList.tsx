<<<<<<< HEAD
import {Text} from "react-native"
export const ProductList = () => {
  return(
    <Text>
      ola
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse voluptatem numquam consequatur. Tenetur, veniam ipsa delectus veritatis aperiam impedit nisi, velit id possimus laudantium laboriosam debitis laborum maxime dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio neque voluptatem rem. Quam at accusantium ex soluta est ut deleniti nihil, minus sed unde dolore? Similique recusandae ea ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam corporis consequatur rem, ex accusamus atque asperiores quia tempore fuga. Voluptatum similique tenetur culpa eius odio esse dolores numquam assumenda! llo
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eum quidem veniam nesciunt tenetur quod perferendis aperiam, eveniet consequatur ex ratione amet. Ullam quia doloremque distinctio quidem reiciendis eos laudantium!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis distinctio debitis sit repellat magnam, dolorum voluptas in sunt laborum ea ipsa doloremque, error assumenda voluptate dolores esse, dolorem itaque! ;
    </Text>
=======
import react from "react"
import {Text, View, Image} from "react-native"
import { TextInput } from 'react-native';
import { Searchbar, } from "react-native-paper";
import ListAccordionGroup from "react-native-paper/lib/typescript/components/List/ListAccordionGroup";
import Header from "../../components/Header"
import { Entypo } from '@expo/vector-icons';
import { SearchBarProduct } from "../../components/SearchBar";
import { ProductShow } from "../../components/ProductShow";



export const ProductList = () => {
  return(

    <View>
      <Header/>
        <SearchBarProduct/>
        <ProductShow/>
    </View>
>>>>>>> 50cf49302262c91f9732adeccb63de1a3e3e33ff
  )
}