import styled from "styled-components";

const CardView = styled.section`
display:flex;
padding:1rem;
// padding-left:9rem;
// padding-right:4rem;
width: 70rem;
overflow-x: scroll;


 
`
const Card = styled.div `
background-color: #000;
min-width: 200px;
height: 100px;
margin:0.3rem;
border-radius: 0.44rem;
padding: 3rem;

`


function Cardlist(){
    return(
        
        <CardView>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </CardView>
        
    );
};

export default Cardlist;