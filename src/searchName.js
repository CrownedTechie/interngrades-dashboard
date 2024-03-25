import React from "react";
import { FaFilter } from "react-icons/fa";

class SearchName extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search intern names..."
          onChange={this.props.handleSearch}
        />

        <FaFilter className="filter-icon" onClick={this.props.toggleFilter} />
      </div>
    );
  }
}

export default SearchName;
