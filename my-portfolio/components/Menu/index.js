import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';


const MenuContainer = styled.div `
height:${props => props.expandMenu};
width:100vw;
left:0;
display:flex;
background-color:${props => props.bgMenu};
justify-content:center;
position:realtive;
transition:all .4s;

`



const MenuItemsHead = styled.div `

`


const MenuItemsConatiner = styled.div`
height:100vh;
width:100vw;
display:${props => props.showMenu};
flex-direction:column;
justify-content:space-evenly;
align-items:center;
position:relative;
left:${props=> props.righty};
transition: all .5s; 
visibility:${props=> props.visibleCont};

.headCont
{
// border:.2px solid blue;
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
height:50px;
text-align:center;
cursor:pointer;
}

`

const HamContainer = styled.div `
position:absolute;
right:${props => props.hamRight};
z-index:1;
transition: all 1s;
margin:10px;
cursor:pointer;`


const HamIcon = styled.div
`   
    transition:all .5s;
    // .hamLines
    // {
    //     height:.25em;
    //     width:30px;
    //     margin:.5em;
    //     background-color:#21AAB5;
    //     transition:all 1s;
    // }
`
const TopBarContainer = styled.div `
display:flex;
justify-content:center;

`

const HamLine1 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:#376293;
transition:all 1s;
transform:${props=> props.LineTrans1};
`
const HamLine2 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:#21AAB5;
transition:all 1s;
opacity:${props => props.LineTransOp2};
`
const HamLine3 = styled.div`
height:.25em;
width:35px;
margin:.5em;
background-color:#5eba92;
transition:all 1s;
transform:${props=> props.LineTrans3};
`



const CircleIconsCont = styled.div`

display:flex;
margin-left:7em;
justify-content:center;
// border:2px solid red;
width:40%;
opacity : ${props => props.hiddenIcons};
transition:all 1s;
`



export const Menu = ({
    rightHam = "0",
    rightPosition = "-55em",
    revealMenu = "flex",
    menuHeight="10vh",
    toggle = false,
    menuBg = "none",
    contVisble = "hidden",
    onClick = ()=> {},
    transLine1 = "rotate(0deg) translate(0,0)",
    transLineOp2 = "1",
    transLine3 = "rotate(0deg) translate(0,0)",


})=> 
{
    const router = useRouter()
    // const[moveHam, setMoveHam] = useState (false)
    const[position, setPosition] = useState (false)
    

     
        

   
    console.log(toggle);
    return <MenuContainer 
            expandMenu={menuHeight}
            bgMenu = {menuBg} >
                
               <TopBarContainer> 



                    <HamContainer 
                    onClick = {onClick}
                    hamRight = {rightHam}>
                        
                        <HamIcon> 
                            {/* <div ="hamLines" >  </div>
                            <div ="hamLines">  </div>
                            <div ="hamLines">  </div> */}
                            <HamLine1 LineTrans1 = {transLine1} > </HamLine1>
                            <HamLine2 LineTransOp2 = {transLineOp2}> </HamLine2>
                            <HamLine3 LineTrans3 = {transLine3}> </HamLine3>

                        </HamIcon>
                    
                    </HamContainer>
                    
                    

                
                    <MenuItemsConatiner 
                        righty={rightPosition}
                        showMenu = {revealMenu}
                        visibleCont ={contVisble}>
                        
                        <div onClick = {()=> router.push("/home")}>
                            <MenuItemsHead>
                                Home
                            </MenuItemsHead>
                        </div>
                        
                        
                        <div onClick = {()=> router.push("/category")} >
                            <MenuItemsHead>
                                About
                            </MenuItemsHead>
                            
                        </div>
                            
                        <div onClick = {()=> router.push("/subcat/organic")} >
                            <MenuItemsHead> 
                                Work
                            </MenuItemsHead>
                            
                        </div>
                            
                        <div onClick = {()=> router.push("/subcat/inorganic")} 
                        >
                            <MenuItemsHead>
                                Resume 
                            </MenuItemsHead>
                            
                        </div>

                
                </MenuItemsConatiner>
            
                </TopBarContainer> 

        </MenuContainer>
}

