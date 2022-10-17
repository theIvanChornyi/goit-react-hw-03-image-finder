import { ImageGalleryGrid } from './ImageGallery.styled';
import { CardGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, ...other }) => (
  <ImageGalleryGrid>
    {images.map(img => (
      <CardGalleryItem key={img.id} data={img} {...other} />
    ))}
  </ImageGalleryGrid>
);
