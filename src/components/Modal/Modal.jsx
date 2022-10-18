import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, FullImage } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.keyClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.keyClose);
  }

  render() {
    const {
      mouseClose,
      picture: { tags, largeImageURL },
    } = this.props;

    return createPortal(
      <Overlay onClick={mouseClose}>
        <FullImage>
          <img src={largeImageURL} alt={tags} />
        </FullImage>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  keyClose: PropTypes.func,
};
