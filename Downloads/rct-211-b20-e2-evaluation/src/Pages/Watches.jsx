import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchCard from "../Components/WatchCard";
import Filter from "../Components/Filter";
import { useLocation, useSearchParams } from "react-router-dom";
import { GetWatch } from "../Redux/AppReducer/action";

const Watches = () => {
  const watch = useSelector((store) => store.Appreducer.watches);
  console.log(watch);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location || watch.length === 0) {
      const category = searchParams.getAll("category");
      const queryParams = {
        params: {
          category: category,
        },
      };
      dispatch(GetWatch(queryParams));
    }
  }, [location.search]);

  return (
    <div style={{display:"flex"}}>
      <Filter />
      <div>
        {watch.length > 0 &&
          watch.map((item) => {
            return <WatchCard key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Watches;
