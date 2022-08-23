import { Container } from "./style"
import Header from "../../components/Header"
import { SearchBarProduct } from "../../components/SearchBar"
import { ContanierMyList } from "../../components/ContanierMyList"

export const MyList = () => {
  return(
    <Container>
      <Header/>
      <SearchBarProduct/>
      <ContanierMyList/>
    </Container>
  )
}