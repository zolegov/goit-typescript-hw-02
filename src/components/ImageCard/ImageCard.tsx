interface ImageCardProps {
  item: {
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    description: string;
  };
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
