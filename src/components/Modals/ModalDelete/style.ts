// import { css } from "styled-components";
import styled, { css } from "styled-components/native";

type FilterOptionProps = {
  selected: boolean;
};

export const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.31);
  padding: 25px;
`

export const ModalView = styled.View`
  width: 100%;
  background-color: #fff;
  height: 180px;
  align-items: center;
  justify-content: space-around;
  border-radius: 14px;
  padding: 20px;
`

export const Tilte = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
`

export const ButtonContanier = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.TouchableOpacity<FilterOptionProps>`
  width: 135px;
  height: 35px;
  border-radius: 14px; 
  align-items: center;
  justify-content: center;

  ${(props: { selected: any; }) => 
    props.selected === true
    ?
    css`
      background-color: #CFCFCF;
    `
    :
    css`
      background-color: #6691FF;
    `
  }
`


  
export const ButtonClose = styled.View`
`

export const TextStyle = styled.Text`
  font-size: 18px;
  font-weight: 500;
`

export const ModalText = styled.View`

`
