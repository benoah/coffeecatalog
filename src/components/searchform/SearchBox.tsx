import React, { ChangeEvent } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "../../sass/SearchBox.scss";

interface SearchBoxProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <form className="search-form">
      <label htmlFor="search-input" className="search-label">
        <div className="search-input-group">
          <SearchOutlined className="search-icon" />
          <input
            id="search-input"
            type="search"
            className="search-input"
            placeholder="Find your coffee..."
            value={value}
            onChange={onChange}
            aria-label="Search"
          />
        </div>
      </label>
    </form>
  );
};

export default SearchBox;
