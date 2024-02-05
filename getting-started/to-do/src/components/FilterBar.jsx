import React from 'react';
import { useState } from 'react';

function FilterBar(props) {
  function handleActive(active) {
    props.setActive(active);
  }
  return (
    <div className="filterBar">
      <form className="filterForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="filterInput"
          placeholder="search.."
          onChange={(e) => props.setFilterText(e.target.value)}
        />
        <div className="filterBtns">
          <button
            className={`btn ${props.active === 'active' ? 'btn-primary' : ''}`}
            onClick={(e) => {
              props.setInCompletedOnly(false);
              handleActive('active');
            }}
          >
            Active
          </button>
          <button
            className={`btn ${props.active === 'completed' ? 'btn-primary' : ''}`}
            onClick={(e) => {
              props.setInCompletedOnly(true);
              handleActive('completed');
            }}
          >
            Completed
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterBar;
