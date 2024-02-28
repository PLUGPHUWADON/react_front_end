import PropTypes from 'prop-types';

const Hello = ({ name, message }) => {
    return (
      <div>
        <h1>{message} {name}</h1>
      </div>
    )
}
  
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
  
  export default Hello;