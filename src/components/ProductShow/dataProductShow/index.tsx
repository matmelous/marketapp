import { View } from "react-native"
import { 
    Box,
    NamePrroduct,
    PriceProduct
} from "./styled"

type Props = {
    labelName: Object,
    labelPrice: Object,
}

export const DataProductShow = ({labelName, labelPrice}: Props) => {
    return(
      <Box>
        <NamePrroduct>
            {labelName}
        </NamePrroduct>
        <PriceProduct>
            {labelPrice}gr
        </PriceProduct>
      </Box>
    )
}