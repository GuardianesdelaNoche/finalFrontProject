import pT from 'prop-types';
const ImageNotFound = ({name}) => {
    return(        
        <div className="imgSmall">
            <p> Imagen No disponible: {name} </p>
        </div>
    );
}
ImageNotFound.propTypes = {
    name: pT.string,
}
export default ImageNotFound;

ImageNotFound.defaultProps = {    
    isRequired: false
  }