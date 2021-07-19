import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
<<<<<<< Updated upstream
    edge: "#20d489",
    error: "#bb2929",
    success: "#20d489",
    focus: "rgba(32,212,137,.18823529411764706)"
=======
    edge: "#0075FF",
    error: "#F66060",
    success: "#1ed12d"
>>>>>>> Stashed changes
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr; 
    gap: 0px;
`;



const Label = styled.label`
    display: block;
    font-weight: 500;
    min-height:40px;
    cursor:pointer;
    margin-bottom:-12px;
<<<<<<< Updated upstream
=======
    margin-top:10px;
`;
>>>>>>> Stashed changes

    ${props => props.isValueValid === 'false'  && css `
        color: ${colors.error} ;
    `} 
`;

const GroupInput = styled.div`
    position:relative;
    z-index: 90;    
`;

const InputC = styled.input`
    width: 100%;
    background: #fff;    
    height: 40px;
    line-height:45px;
    padding:0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    background:#F5F8FA;
    border-radius:5px;
    margin-bottom:10px;

    &:focus {
        outline:none;       
        box-shadow: 0 0 0 .2rem ${colors.focus}; 
    }
     
    ${props => props.isValueValid === 'true'  && css `
        border: 2px solid transparent;
    `} 

    ${props => props.isValueValid === 'false'  && css `
        border: 2px solid ${colors.error} !important;
    `} 
`;

const ErrorLegend = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
<<<<<<< Updated upstream
    display:none;

    ${props => props.isValueValid === 'true'  && css `
       display:none;
    `} 

    ${props => props.isValueValid === 'false'  && css `
        display:block;
    `} 
=======
    display: none;
>>>>>>> Stashed changes
`;

const ValidationIcon = styled(FontAwesomeIcon)`
    position:absolute;
    right: 10px;
    bottom: 25px;
    z-index: 100;
    font-size: 16px;
    opacity:0;
<<<<<<< Updated upstream

    ${props => props.isValueValid === 'false'  && css `
        opacity:1;
        bottom:42px;
        color: ${colors.error}
    `} 

    ${props => props.isValueValid === 'true'  && css `
        opacity:1;
        bottom:25px;
        color: ${colors.success}
    `} 
=======
>>>>>>> Stashed changes
`;

const ContentBottomCenter = styled.div `
    display:flex;
    justify-content:center;

`;

const Button = styled.button `
    height: 45px;  
    width: auto;
    background: #20d489 !important;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor:pointer;
    transition: .1s ease all;
<<<<<<< Updated upstream
    margin-top:10px;
=======
    
>>>>>>> Stashed changes

    &:hover {
        background: #19b674 !important;
        border-color: #19b674;
        
    }
`;

const SuccessMessage = styled.p`
<<<<<<< Updated upstream
    color: #0d5537;
    background-color: #d2f6e7;
    padding: 20px;
    font-size: 15px;
    border: 1px solid #bcf2dc;
    border-radius: .65rem;
    margin-top: 1.5rem!important;
    margin-bottom: 2.5rem!important;
    p {
        margin:0;
    }

    b {
        margin-left:10px;
    }
 
`;

const ErrorMessage = styled.div`
    background-color: #fcd9e2;
    padding: 20px;
    border: 1px solid #fbc6d3;
    border-radius: .65rem;
    margin-top: 1.5rem!important;
    margin-bottom: 2.5rem!important;
    color: #912741;
    
    p {
        margin:0;
    }

    b {
        margin-left:10px;
=======
    font-size: 14px;
    color: ${colors.success};
    display: none
`;

const ErrorMessage = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colors.error};
    padding: 0px 15px;
    border-radius: 3px;

    p {
        margin:0;
    }
    b {
        margin-left: 10px
>>>>>>> Stashed changes
    }
`;

export {Form,
        Label,
        GroupInput,
        InputC,
        ErrorLegend,
        ValidationIcon,
        ContentBottomCenter,
        Button,
        ErrorMessage,
        SuccessMessage};