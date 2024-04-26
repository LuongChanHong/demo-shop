import React from "react";

const SearchBox = () => {
  return (
    <section className="w-100">
      <div className="header__search--container d-flex align-items-center justify-content-between">
        <div className="header__input px-2 w-100">
          <input placeholder="Tìm kiếm..." />
        </div>
        <div className="header__icon header__search--icon d-flex align-items-center justify-content-center">
          <i className="-ap icon-magnifying-glass"></i>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
