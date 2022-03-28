import styled from "styled-components";

const SearchContainer = styled.div`
    width: 80%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const SearchInput = styled.input`
    padding: 0.6rem;
    width: 100%;
`

const Title = styled.h3`
    margin: 0;
    padding: 0;
`


function Searchbox(){
    return(
        <Container>
            <SearchContainer>
                <Title>Search</Title>
                <SearchInput placeholder="search..."/>
            </SearchContainer>
        </Container>
    );
};

export default Searchbox;