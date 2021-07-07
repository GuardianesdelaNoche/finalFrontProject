import styled from 'styled-components';

const accentColor ='rgb(29, 161, 242)';

const ButtonMenu = styled.button `

    align-items: center;
    background-color: ${'black'};
    
    border-style: solid;
    border-width: 1px;
    border-color: black;
    color : ${accentColor};
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: bold;
    min-height: 50px;
    justify-content: center;
    min-width: 72px;
    
    
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${accentColor};
        color:white

        }   
    }

`;

export default ButtonMenu;