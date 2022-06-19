import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Minimize } from '../components/AllSvgs'

const Power = styled.button`
    position: fixed;
    top: 1.5rem;
    left: 97%;
    transform: translate(-50%, 0);
    background-color: transparent;
    padding: 0.3rem;
    border-radius: 50%;
    border: 0px solid transparent;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index:3;
    cursor: pointer;
    &:hover{
        background-color: rgba(255,255,255,0.2);
        box-shadow: 0 0 8px 6px rgba(255,255,255,0.2);
    }
    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <Minimize width={30} height={30} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton
