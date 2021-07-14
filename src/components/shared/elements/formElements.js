import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colors = {
    edge: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d"
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr; 
    gap: 20px;



`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    min-height:40px;
    cursor:pointer;
    margin-bottom:-12px;
`;


const GroupInput = styled.div`
    position:relative;
    z-index: 90;
    
`;


const InputC = styled.input`
    width: 100%;
    background: #fff;    
    height: 45px;
    line-height:45px;
    padding:0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    background:#E0E0E0;
    border-radius:5px;
    margin-bottom:10px;

    &:focus {
        border:3px solid ${colors.edge};
        outline:none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);

    }

    

     ${props => !props.isValid && css `
         border: 3px solid ${colors.error};
         `} 
`;

const ErrorLegend = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;
`;

const ValidationIcon = styled(FontAwesomeIcon)`
    position:absolute;
    right: 10px;
    bottom: 33px;
    z-index: 100;
    font-size: 16px;
    opacity:0;
`;

const ContentBottomCentent = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    aling-items:center;

`;

const Button = styled.button `
    height: 45px;  
    width: 30%;
    background: primary;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor:pointer;
    transition: .1s ease all;
    margin-top:10px;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163,1);
    }
`;


const SuccessMessage = styled.p`
    font-size: 14px;
    color: ${colors.success};
    display: none
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
        ContentBottomCentent,
        Button,
        ErrorMessage,
        SuccessMessage};