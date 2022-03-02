import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './styles';



// import { Content,Heading, Button } from './Styles';

export const ScrollButton = () =>{
const [visible, setVisible] = useState(false)
const [scrolled, setScrolled] = useState(0)
useEffect(()=>{
    
    const scrollHeight = document.body.scrollHeight

    window.onscroll=()=>{
        // console.log(scrollHeight) 
        // console.log(scrolled) 
        setScrolled (window.scrollY)
    }

  

        if (scrolled > scrollHeight/4){
        setVisible(true)
        }
        else if (scrolled <= scrollHeight/4){
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


