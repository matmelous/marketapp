import React from "react"
import {
    EditContainer,
    Button,
    TitleButtonEdit
 } from "./styled"

 type Props = {
    onPressAdd?: () => void;
    labelAdd: string
  }

export const EditButton = ({onPressAdd,labelAdd}: Props) => {
    return(
        <EditContainer>
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