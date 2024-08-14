import { Photo } from "../unsplash-api";

interface ImageCardProps {
  item: Photo;
  openModal: (image: string, likes: number, description: string) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() =>
          openModal(item.urls.regular, item.likes, item.description)
        }
      />
    </div>
  );
};

export default ImageCard;
