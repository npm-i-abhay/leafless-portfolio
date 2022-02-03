import styled from "styled-components";
import { font,font_two } from "@/utils/variables";

export const Heading = styled.span`
${font.link}
// font-family: 'Roboto Mono', monospace;
font-family: ${font.name};
font-weight:400;
color:${props => props.headCol};
font-size:36px;
`
export const SubHeading = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono&display=swap');
font-family: 'Roboto Mono', monospace;
font-size:36px;
font-weight:400;
color:${props => props.subHeadCol};


`