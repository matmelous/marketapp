import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const MarketView = styled.View`
  max-width: 90%;
  min-height: 150px;
  left: 5%;
  top: 70px;
  background-color: #F5F5F5;
  border-radius: 15px;
  align-items: center;
`

export const MarketName = styled.View`
  padding-top: 1%;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-content: center;
  text-align: center;
`
export const NameMarket = styled.Text`
  font-weight: 600;
  font-size: 22px;
  height: 40px;
  align-items: center;
  justify-content: center;
  top: 40%;
  right: 8%;
`

export const Button = styled.View`
  top: 50px;
  background-color: #FFF;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #6691FF;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  bottom: 2px;
`

export const ButtonBox = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
`

export const Imagem = styled.Image`
  left: 39%;
`