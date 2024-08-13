import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item) => (
        <li key={item.id} className={css.imageGalleryListItem}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
