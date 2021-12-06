import styled from 'styled-components'
import { NavLink as LinkR } from 'react-router-dom'

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    width: 100%;
`
export const Li = styled.li`
    height: 40px;
`

export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border: none;
    &.active {
        color: #01bf71;
        text-decoration: underline;
    }
    &:hover {
        border-radius: 5px;
        background: rgba(1, 191, 113, .5)
    }
`