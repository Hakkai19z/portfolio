import { memo, useEffect } from "react";
import { preloader } from "../utilities";
const PreLoader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default memo(PreLoader);
