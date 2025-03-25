import FirstLoader from "./First_Loader";
import SecondLoader from "./second_Loader";
import { useState } from "react";

const Loader = () => {
  const [firstLoaderTimeOut, setFirstLoaderTimeOut] = useState(false);
  setTimeout(() => {
    setFirstLoaderTimeOut(true);
  }, 1500);
  return (
    <div className="opening">
      {!firstLoaderTimeOut && <FirstLoader />}
      {firstLoaderTimeOut && <SecondLoader />}
    </div>
  );
};

export default Loader;
