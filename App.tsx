import * as React from "react"
import Header from "./src/components/Header"
import Home from "./src/screens/Home/Home"

import { ProductList } from "./src/screens/ProductList/ProductList"
import { ErrorProductList } from "./src/screens/ErrorProductList/ErrorProductList"
import { MarketShow } from "./src/components/MarketShow"

import { MarketList } from "./src/screens/MarketList"
import { ProductMarket } from "./src/screens/ProductMarket"
import ModalDelete from "./src/components/Modals/ModalDelete"

export default function App({navigation}) {
    return(
        <>
        {/* <Home navigation={navigation}/> */}
        {/* <ProductList/> */}
        {/* <ErrorProductList/> */}
        
        {/* <MarketShow/> */}
        {/* <MarketList/> */}
        <ModalDelete/>
    </>
    )
}
