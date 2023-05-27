
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onClick }) => (
  <Btn type="button" onClick={onClick}>
    Load More
  </Btn>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;