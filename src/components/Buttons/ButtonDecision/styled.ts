import { css } from "styled-components";
import styled  from "styled-components/native";

type FilterOptionProps = {
  background: boolean;
};

export const DecisionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 60px;
`

export const Button = styled.TouchableOpacity<FilterOptionProps>`
  width: 40%;
  height: 50px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  
  ${(props: { background: any; }) => 
    props.background === true
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

export const TitleButtonDecision = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`