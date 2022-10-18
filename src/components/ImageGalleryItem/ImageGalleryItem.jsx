import PropTypes from 'prop-types';

import { GalleryItem, ImageGalleryItem } from './ImageGalleryItem.styled';

export const CardGalleryItem = ({ data, openModal }) => {
  const { webformatURL, tags } = data;

  return (
    <GalleryItem onClick={() => openModal(data)}>
      <ImageGalleryItem src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

CardGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func,
};
