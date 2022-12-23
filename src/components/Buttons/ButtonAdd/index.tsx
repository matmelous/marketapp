import {AddButton, Container, Title} from "./styled"
import { Text, View } from "react-native"


type Props = {
    onPress: ()=>void
}

export const ButtonAdd = ({onPress}: Props) =>{
    return(
    <Container>
        <AddButton
            onPress={onPress}
        >
            <Title>
                Adicionar produto
            </Title>
        </AddButton>
    </Container>
    )
}