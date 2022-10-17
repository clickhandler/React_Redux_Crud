import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleFilter = (e) => {
    const option = e.target.value;

    let newcategory = [...category];

    if (newcategory.includes(option)) {
      // Add
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      // Remove
      newcategory.push(option);
    }
    setCategory(newcategory);
  };

  useEffect(() => {
    if (category) {
      const params = {};
      category && (params.category = category);

      setSearchParams(params);
    }
  }, [category, setSearchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleFilter} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleFilter} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleFilter} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
