import styled, { css } from "styled-components/native";
import { ProductShow } from "../../ProductShow";

type FilterOptionProps = {
  result: boolean;
};

export const Container = styled.View`
  width: 100%;
`

export const TitleButtonFilter = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const ValueResult = styled.Text`
  ${(props: { result: any; }) => 
    props.result === true
    ?
    css`
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    `
    :
    css`
      font-size: 18px;
      font-weight: 500;
      color: #000;
    `
  }
`

export const ButtonFilter = styled.TouchableOpacity`
  width: 100%;
  border-radius: 14px;
  background-color: #6691FF;
  align-items: center;
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
`
