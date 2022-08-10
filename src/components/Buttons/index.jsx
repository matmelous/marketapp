import React from "react";
import { ConfigButton, Containers, TextP } from "./styled"

const ButtonHome = () => {
  return(
  <Containers>
    <ConfigButton>
      <TextP>
        Login
      </TextP>
    </ConfigButton>
    <ConfigButton>
      <TextP>
       Lista de Produtos
      </TextP>
    </ConfigButton>
    <ConfigButton>
      <TextP>
        Lista de compras
      </TextP>
    </ConfigButton>
  </Containers>
  )
}
export default ButtonHome;

