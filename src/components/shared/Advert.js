import pT from 'prop-types';

const Advert = ({message}) => {
  return (
    <div className="loginPage-error">Error: {message}</div>
  );
};

Advert.propTypes = {
    message: pT.string.isRequired
}

export default Advert;