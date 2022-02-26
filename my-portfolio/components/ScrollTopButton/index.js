import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';



// import { Content,Heading, Button } from './Styles';

export const ScrollButton = () =>{
const scrollHeight = document.body.scrollHeight
const [visible, setVisible] = useState(false)
const [scrolled, setScrolled] = useState(0)
useEffect(()=>{

    window.onscroll=()=>{
        // console.log(window.scrollY) 
        setScrolled (window.scrollY)
    }

  

        if (scrolled > scrollHeight/3){
        setVisible(true)
        }
        else if (scrolled <= scrollHeight/3){
        setVisible(false)
        }
    
},[scrolled,visible])


const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};



return (
	<Button>
	<FaArrowCircleUp color='#8B3AF3' onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}


