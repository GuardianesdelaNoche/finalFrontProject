import styled from 'styled-components';

const accentColor ='#20d489';
const light = '#f5f8fa';
const colorlight = '#7e8299';



const Button = styled.button `

    align-items: center;
    background-color: ${props => props.variant === 'primary' ? accentColor 
    : props.variant === 'secundary' ? light : 'white'};
    border-style: solid;
    border-radius: .25rem;
    border-width: 1px;
    border-color: ${props => props.variant === 'primary' ? accentColor
        : props.variant === 'secundary' ? light : 'white'};
    color : ${props => 
    (props.variant === 'primary' ? 'white' : props.variant === 'secundary' ? colorlight : '' )};
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: 400;
    justify-content: center;
    min-height: 40px;
    min-width: 72px;
    outline-style: none;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${ props => 
            props.variant === 'primary'
            ? '#19b674'
        : '#e2e6ea'
        };
        border-color: ${ props =>
        props.variant === 'primary'
            ? '#19b674'
            : '#e2e6ea'
        }
    }
     
  
    a {
        color:${ props =>
        props.variant === 'primary'
            ? 'white'
        : '#7e8299'
        }
    }

   
}


    


`;

export default Button;