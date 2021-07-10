import React, { useState } from "react";

export const TextTruncateFlex = ({children}) => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      {!display && (
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          onMouseOver={() => setDisplay(true)}
        >
          {children}
        </div>
      )}
      {display && (
        <div onMouseLeave={() => setDisplay(false)}>{children}</div>
      )}
    </div>
  );
};
