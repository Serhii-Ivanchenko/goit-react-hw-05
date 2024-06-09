import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchField.module.css';
import { useState } from 'react';

export default function SearchField({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    searchQuery.trim() === ''
      ? toast.error('Input can not be empty!')
      : onSearch(searchQuery);

    setSearchQuery('');
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className={css.searchBtn} type="submit">
          <BsSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
}
