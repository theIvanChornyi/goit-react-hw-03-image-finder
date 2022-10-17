import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick, name }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      LOAD MORE <span>{name.toUpperCase()}</span>
    </LoadMoreBtn>
  );
};
