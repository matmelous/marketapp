import { 
  Container, Input, TextError
} from "./styled"
import {useForm, Controller} from "react-hook-form"
import { Text, TouchableOpacity } from "react-native"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React from "react"
import { ButtonDecision } from "../../Buttons/ButtonDecision"
import { useNavigation } from "@react-navigation/native"
import { NavigationType } from "../../../navigation"
import PAGES from "../../../constants/pages"


export const InputLogin = () => {

  const schema = yup.object({
    email: yup.string().email("O email digitado é invalido").required("Digite um email"), 
    password: yup.string().min(6,"A senha deve ter no minimo 6 digitos").required("Informe sua senha"),
  })

  const {control,  handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  })

  function handleSigIn(){
    if(errors.email || errors.password){
      return false
    } return navigator.navigate("Main")
  }

  const navigator = useNavigation<NavigationType>()

  return(
    <Container>
      <Controller
        control={control}
        name="email"
        render={({ field: {onChange, onBlur, value} }) => (
          <Input
          style={[
            {
              borderWidth: errors.email ? 1 : 1, 
              borderColor: errors.email ? 'red' : '#CCCCCC'
            }
          ]}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Digite seu Email"
          />
        )} 
      />
      {errors.email && <TextError>{errors.email?.message}</TextError>}

      <Controller
        control={control}
        name="password"
        render={({ field: {onChange, onBlur, value} }) => (
          <Input
            style={[
              {
                borderWidth: errors.email ? 1 : 1, 
                borderColor: errors.email ? 'red' : '#CCCCCC'
              }
            ]}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        )} 
        />
      {errors.password && <TextError>{errors.password?.message}</TextError>}

      <ButtonDecision 
        onPress={()=>navigator.navigate("Main") }
      />
    
    </Container>    
  )
}