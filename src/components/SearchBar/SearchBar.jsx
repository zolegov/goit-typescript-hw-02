import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");
const SearchBar = ({ onSearch }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic === "")
      return toast.error("Add searsh word", {
        duration: 2000,
        style: {
          background: "red",
          color: "white",
        },
      });
    onSearch(topic);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
