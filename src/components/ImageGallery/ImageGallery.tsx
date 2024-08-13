import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    description: string;
  }[];
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
