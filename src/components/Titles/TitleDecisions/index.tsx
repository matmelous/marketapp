import { TitleDecisionConatiner, TextTitleDecision } from "./styled"

export const TitleDecision = ({ children }) => {
  return(
    <TitleDecisionConatiner>
      <TextTitleDecision>
        {children}
      </TextTitleDecision>
    </TitleDecisionConatiner>
  )
}