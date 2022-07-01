//import { Link } from 'react-router-dom'
import Link from 'next/link';
import styled from 'styled-components';

export const MainMenuWrapper = styled.nav`
    height: 2.5rem;
    background: #C4C4C4;
    align-content: center;
`

export const MainMenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: #C4C4C4;
    padding: 1rem 0 1rem 0;
`
export const MainMenuLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
`