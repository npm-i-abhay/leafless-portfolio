import React,{useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

export const ScrollImageTwo = ({src, img}) => {

    // const [left,setLeft] = useState 
    const [visibility, setVisibility] = useState(false)
  return (
    //   this function is using a library called ReactVisibilitySensor
    // it detects when an element comes in the viewport's view and change is state
    // I have added a conditional left to it that as soon as it becomes visible the left changes to zero

    <ReactVisibilitySensor 
        partialVisibility
        onChange={(isVisible)=>{
        setVisibility(isVisible)
    }} >
        <div
            style={{
                width:'100%',
                transition:'all .75s',
                position:'relative',
                margin:'20px',
                display:'flex',
                // border:'2px solid red',
                opacity: visibility ? 1 : 0.25,
                right:visibility? 0 :-300,
                justifyContent:'center'
        }} >
        
        {img}
        </div>
    </ReactVisibilitySensor>
  )
}
