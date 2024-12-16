import { Fragment, memo, useEffect } from "react";
import { customCursor } from "../utilities";
const Mouse = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </Fragment>
  );
};
export default memo(Mouse);
