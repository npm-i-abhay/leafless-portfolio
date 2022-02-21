import styled from "styled-components";

export const InfoContainer = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
@media (max-width: 500px) {
    flex-direction:column;
    align-items:center;
    height:100%;
    // justify-content:center;
    // background:green;
}
`

export const Description = styled.div`
color:${props => props.txtCol};

`

export const StackCont = styled.div`
display:flex;
flex-wrap:wrap;
// background:red;
width:100%;
justify-content:space-between;
`

export const TechStack = styled.img`
height:70px;
width:70px;
border-radius:${props => props.radius};
`

export const ContentCont = styled.div`

width:60%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
order:${props=>props.order};

@media (max-width: 500px) {
    order:0;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    // background:red;
    height:500px;
    margin-top:50px;
}

`
// export const Explore = styled.button`
// color:${props => props.txtCol};

// `