import React,{useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

export const ScrollImage = ({src, img, children, direction='row'}) => {

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
                // margin:'20px',
                display:'flex',
                flexDirection:{direction},
                // border:'2px solid red',
                opacity: visibility ? 1 : 0.25,
                left:visibility? 0 :-300,
                justifyContent:'space-around',
                alignItems:'center'
        }} >
        
            {img}
            {children}
        </div>
    </ReactVisibilitySensor>
  )
}
