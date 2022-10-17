import { GalleryItem, ImageGalleryItem } from './ImageGalleryItem.styled';

export const CardGalleryItem = ({ data, openModal }) => {
  const { webformatURL, tags } = data;

  return (
    <GalleryItem onClick={() => openModal(data)}>
      <ImageGalleryItem src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
