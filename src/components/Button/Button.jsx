import { PropTypes } from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick, name }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      LOAD MORE <span>{name.toUpperCase()}</span>
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};
