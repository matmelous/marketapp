import React from "react"
import {
    EditContainer,
    Button,
    TitleButtonEdit
 } from "./styled"

 type Props = {
    onPressEdit?: () => void;
    onPressAdd?: () => void;
    labelEdict: string,
    labelAdd: string
  }

export const EditButton = ({ onPressEdit, onPressAdd, labelEdict ,  labelAdd}: Props) => {
    return(
        <EditContainer>
        <Button
          onPress={onPressEdit}
          background={true}
        >
          <TitleButtonEdit>
            {labelEdict}
          </TitleButtonEdit>
        </Button>  
        <Button
          onPress={onPressAdd}
        >
          <TitleButtonEdit>
            {labelAdd}
          </TitleButtonEdit>
        </Button>
      </EditContainer>
    )
}