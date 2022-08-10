import styled from "styled-components/native";

type ArrowImgProps = {
  rotate: boolean,
}

export const Wrapper = styled.View`
  height: 65px;
  width: 100%;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 14px;
`
export const Texto = styled.Text`
  width: 185px;
  height: 35px;
  left: 70px;
  top: 15px;
  font-family: 'Faster One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #6691FF;
  margin-top: 5px;
`;

export const IconDiv = styled.View`
  height: 35px;
  width: 35px;
  background-color: red;
  border-radius: 50%;
  margin-left: 15px;
  
`;

