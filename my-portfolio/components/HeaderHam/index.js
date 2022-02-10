import React from 'react';
import { useTheme } from '@/utils/provider';
import { comp_theme } from '@/utils/variables';
// styled components
import { 
    HamContainer,
    HamLine1,
    HamLine2,
    HamLine3

} from './styles';

export const HeaderHam = (
    {
    onHamClick=()=>{},
    ham,
    setHam,
    transLine1 = "rotate(0deg) translate(0,0)",
    transLineOp2 = "1",
    transLine3 = "rotate(0deg) translate(0,0)",
    transLine1Chain= "rotate(405deg) translate(12px, 6px)",
    transLineOp2Chain= "0",
    transLine3Chain= "rotate(-405deg) translate(11px, -6px)"
    }
) => {

    const {theme, setTheme} = useTheme()
    return<HamContainer onClick={onHamClick} >
        <HamLine1 
            LineTrans1={ ham ? transLine1Chain : transLine1}
            col={comp_theme[theme].ham}
           />

    
        <HamLine2 
            LineTransOp2={ ham ? transLineOp2Chain: transLineOp2}
            col={comp_theme[theme].ham}
        />
        
        <HamLine3 
            LineTrans3={ ham ? transLine3Chain : transLine3} 
            col={comp_theme[theme].ham}
            />
    </HamContainer>;
};
