import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./components/unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [topic, setTopic] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [description, setDescription] = useState("");
  const handleSearch = async (topic) => {
    setPhotos([]);
    setTopic(topic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (topic === "") return;
    async function getPhotosMore() {
      try {
        setError(false);
        setLoader(true);
        const data = await fetchPhotos(topic, page);
        setPhotos([...photos, ...data.results]);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotosMore();
  }, [page, topic]);

  const openModal = (image, likes, description) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    setLikes(likes);
    setDescription(description);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loader === true && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} openModal={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
        likes={likes}
        description={description}
      />

      {photos.length > 0 && page < 1000 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
