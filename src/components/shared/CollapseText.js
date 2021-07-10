import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse } from "react-bootstrap";
import React, { useState } from "react";

// const TextTruncateFlex = ({children}) => {
//   const [display, setDisplay] = useState(false);
//   return (
//     <div>
//       {!display && (
//         <div
//           style={{
//             overflow: "hidden",
//             whiteSpace: "nowrap",
//             textOverflow: "ellipsis",
//           }}
//           onMouseOver={() => setDisplay(true)}
//         >
//           {children}
//         </div>
//       )}
//       {display && (
//         <div style={{ transition: 'height 2s',
//                    transitionTimingFunction: 'linear'}} onMouseLeave={() => setDisplay(false)}>{children}</div>
//       )}
//     </div>
//   );
// };

export const CollapseText = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setOpen(!open)}
        aria-controls="children-collapse-text"
        aria-expanded={open}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: !open ? 'block' : 'none'
        }}

      >
         {children}
      </div>
      <Collapse in={open} onMouseLeave={() => setOpen(!open)}>
        <div id="children-collapse-text">
          {children}
        </div>
      </Collapse>
    </>
  );
}
