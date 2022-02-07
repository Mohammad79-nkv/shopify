import { useState } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = (prpos) => {
    const {size, color} = prpos;
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <PuffLoader color={color} loading={true} css={override} size={size} />
    </div>
  );
};

export default Spinner;
