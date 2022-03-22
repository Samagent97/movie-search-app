import { Logo } from './navigation-styled';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #292929;
    height: 140px;
`




function Navigation() {
    return(
        <NavBar>
            <Logo>MyTestApp</Logo>
        </NavBar>
    );

};

export default Navigation;