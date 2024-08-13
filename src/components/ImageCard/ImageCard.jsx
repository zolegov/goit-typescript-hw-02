export default function ImageCard({ item, openModal }) {
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
}
