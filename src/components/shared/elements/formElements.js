import styled from 'styled-components';
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
`;


const GroupInput = styled.div`
    position:relative;
    z-index: 90;
    
`;


const InputC = styled.input`
    width: 100%;
    background: #fff
    border-radius: 3px;
    height: 45px;
    line-height:45px;
    padding:0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border:3px solid ${colors.edge};
        outline:none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);

    }
`;

const ErrorLegend = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    /*display: none;*/
`;

const ValidationIcon = styled(FontAwesomeIcon)`
    position:absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    // opacity:0;
`;

export {Form, Label, GroupInput, InputC, ErrorLegend, ValidationIcon};