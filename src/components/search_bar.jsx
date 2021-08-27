import React, { Component } from 'react';

class SearchBar extends Component {
handUpdate = (event) => {
  console.log(event.target.value);
}

  render() {
    return (
      <input type="text" className="form-control form-search"
        onChange={this.handUpdate} />
    );
  }
}
export default SearchBar;