import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { PiHeartStraightFill } from "react-icons/pi";
Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  likes,
  description,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button onClick={onClose} className={css.closeButton}>
        X
      </button>
      {imageUrl && (
        <img src={imageUrl} alt="Large view" className={css.image} />
      )}
      {likes && (
        <span>
          <PiHeartStraightFill />
          {likes}
        </span>
      )}
      {description && <p>{description}</p>}
    </Modal>
  );
}
