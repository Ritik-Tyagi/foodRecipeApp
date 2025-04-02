import { useEffect, useState } from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(timer);
  }, [inputValue, setSearchTerm]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;