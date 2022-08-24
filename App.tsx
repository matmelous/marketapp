import * as React from "react"
import Header from "./src/components/Header"
import Home from "./src/screens/Home/Home"

import { ProductList } from "./src/screens/ProductList/ProductList"
import { ErrorProductList } from "./src/screens/ErrorProductList/ErrorProductList"
import { MarketShow } from "./src/components/MarketShow"
import { MyList } from "./src/screens/MyList/MyList"
import { MarketList } from "./src/screens/MarketList"
import { ProductMarket } from "./src/screens/ProductMarket"

export default function App({navigation}) {
    return(
        <>
        {/* <Home navigation={navigation}/> */}
        {/* <ProductList/> */}
        {/* <ErrorProductList/> */}
        <MyList/>
        {/* <MarketShow/> */}
    </>
    )
}
