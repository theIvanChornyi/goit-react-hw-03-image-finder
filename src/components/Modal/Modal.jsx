import { createPortal } from 'react-dom';
import { Overlay, FullImage } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ close, picture: { tags, largeImageURL } }) =>
  createPortal(
    <Overlay onClick={close}>
      <FullImage>
        <img src={largeImageURL} alt={tags} />
      </FullImage>
    </Overlay>,
    modalRoot
  );
