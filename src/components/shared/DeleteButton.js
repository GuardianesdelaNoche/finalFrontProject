import React  from "react";
import { deleteProduct } from '../../api/products';
import Button from "./Button";
import useError from '../../hooks/useError';
import useIsLoading from '../../hooks/useIsLoading';
import pT from 'prop-types';

const DeleteButton = ({productId, history}) => {

    const [isDelete, setIsDelete] = React.useState(false);
    const [error, handleError] = useError(false);
    const [isLoading, handleIsLoading] = useIsLoading(false);

    React.useEffect(()=>{
        async function setDeleteProduct () {
            try {     
               handleIsLoading(true);                  
               if(isDelete === true){
                    await deleteProduct(productId);                             
                    history.push("/");
               }                     
            } catch (error) {        
               handleError(error);            
            }finally
            {            
                handleIsLoading(false);
            }
            }
        setDeleteProduct();   

    },[isDelete])  
    const handleDelete = () => {
        const response = window.confirm("Esta seguro de eliminar el producto " + productId);
        if(response === true)
        {
            setIsDelete(true);
        }
    } 

    return(
       
        <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"           
        onClick={handleDelete}
        
      >
          Delete
      </Button>
         
    )
};

DeleteButton.propTypes = {
    productId: pT.string.isRequired,

}

export default DeleteButton;