import styled from "styled-components";
import img from '../../assets/Rec.png'
const SectionContainer = styled.section`
background:url(${img});
background-repeat: no-repeat;
background-size: cover;
height:550px;
//width: 100%;
padding:2rem;

`
const SectionWriteup = styled.h2`
padding:0;
color:#FFFFFF;
position: absolute;
width: 1rem;
//height: 364px;
left: 77px;
top: 247px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 5rem;
line-height: 80px;
letter-spacing: -0.05em;



`
function Carousel(){
    return(
        <SectionContainer>
            <SectionWriteup>Watch something incredible</SectionWriteup>
        </SectionContainer>  
    );
};


export default Carousel;