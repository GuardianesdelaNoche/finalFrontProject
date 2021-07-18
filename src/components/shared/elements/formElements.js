import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    edge: "#20d489",
    error: "#bb2929",
    success: "#b8ecbc"
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr; 
    gap: 20px;
`;

const Label = styled.label`
    display: block;
    font-weight: 500;
    min-height:40px;
    cursor:pointer;
    margin-bottom:-12px;

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
        border:2px solid ${colors.edge};
        outline:none;       
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
    display:none;

    ${props => props.isValueValid === 'true'  && css `
       display:none;
    `} 

    ${props => props.isValueValid === 'false'  && css `
        display:block;
    `} 
`;


const ValidationIcon = styled(FontAwesomeIcon)`
    position:absolute;
    right: 10px;
    bottom: 25px;
    z-index: 100;
    font-size: 16px;
    opacity:0;

    ${props => props.isvaluevalid === 'false'  && css `
        opacity:1;
        bottom:42px;
        color: ${colors.error}
    `} 

    ${props => props.isvaluevalid === 'true'  && css `
        opacity:1;
        bottom:25px;
        color: ${colors.success}
    `} 
`;

const ContentBottomCenter = styled.div `
    display:flex;
    justify-content:center;
`;

const Button = styled.button `
    height: 45px;  
    width: 30%;
    background: #20d489 !important;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor:pointer;
    transition: .1s ease all;
    margin-top:10px;

    &:hover {
        background: #19b674 !important;
        border-color: #19b674;
        
    }
`;

const SuccessMessage = styled.p`
    height: 45px;
    line-height: 45px;
    background: #b8ecbc;
    padding: 0px 15px;
    border-radius: 3px;
    font-size:11px;
    p {
        margin:0;
    }

    b {
        margin-left:10px;
    }
 
`;

const ErrorMessage = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    font-size:11px;
    p {
        margin:0;
    }

    b {
        margin-left:10px;
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