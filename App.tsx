import * as React from "react"
import Header from "./src/components/Header"
import Home from "./src/screens/Home/Home"
import { ProductList } from "./src/screens/ProductList/ProductList"
import { ErrorProductList } from "./src/screens/ErrorProductList/ErrorProductList"

export default function App() {
    return(
        // <Home props={undefined}/>
        // <ProductList/>
        <ErrorProductList/>
    )
}
