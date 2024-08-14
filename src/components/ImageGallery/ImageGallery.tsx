import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../unsplash-api";
interface ImageGalleryProps {
  items: Photo[];

  openModal: (image: string, likes: number, description: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item) => (
        <li key={item.id} className={css.imageGalleryListItem}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
