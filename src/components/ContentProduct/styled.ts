import styled from "styled-components/native";

export const Contanier = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  margin: 7.5px 0px;
  background: #F5F5F5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px;
`
export const ImageDecoration = styled.View`
  height: 75px;
  width: 75px;
  background-color: red;
  border-radius: 50%;
`

export const TextDescrition = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  margin: 2px;
`

export const TextPrice = styled.View`
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  margin: 2px;
`

export const DivButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 210px;
  margin-top: 10px;
`

export const EditButton = styled.TouchableOpacity`
  height: 25px;
  width: 100px;
  background-color: aqua;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6691FF;
  font-family: sans-serif;
  font-weight: bold;
`

export const Informations = styled.View`
  padding: 0 10px;
`