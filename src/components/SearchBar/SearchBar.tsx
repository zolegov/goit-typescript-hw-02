import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;
    if (topic === "") {
      return toast.error("Add search word", {
        duration: 2000,
        style: {
          background: "red",
          color: "white",
        },
      });
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
