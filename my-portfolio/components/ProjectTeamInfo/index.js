import React from 'react'
import Router, {useRouter} from 'next/router'

// styled Components imports
import { 
    HeroContainer,
    StackCont,
    TechStack,
    Title,
    ColumnTeam,
    ColumnSourceCode,
    Row,
    Heading,
    Text,
    InlineRow,
} from './styles'
const defaultData = [
    "https://placekitten.com/100/100",
    "https://placekitten.com/100/100",
    "https://placekitten.com/100/100",
    "https://placekitten.com/100/100",
    ]
export const ProjectTeamInfo = ({
    
    stackData= defaultData
    ,
    txtCol="#8B3AF3",
    headCol = "#94BDD4",
    contentCol = "#8B3AF3",
    role="Lead Developer/Project Manager",
    route="https://github.com/npm-i-abhay/buzzyApp",
    team='Team of 5'
}) => {

    const router = useRouter()
  return (
    <HeroContainer>
        <Title txtCol={txtCol} >
            Tech Stack
        </Title>
        <StackCont>
            {stackData.map((o,i)=>(<TechStack key={i}  src={o} /> ))}
        </StackCont>
        <Row>
            <ColumnTeam>
                <InlineRow> 
                    <Heading headCol = {headCol} > {team} </Heading>
                    <Heading Heading headCol = {headCol} > {role} </Heading>

                </InlineRow>
                <InlineRow>

                </InlineRow>
            </ColumnTeam>
            <ColumnSourceCode>
                <TechStack 
                    onClick={()=>{window.open(`${route}`, '_blank');}} 
                    src='/tech/github.png'
                    cursor='pointer'/> 
                <Heading headCol = {headCol} >Source Code </Heading>
            </ColumnSourceCode>
        </Row>
    </HeroContainer>

    
  )
}
