// import React, { useEffect } from "react";
// import { Pagination } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { getCurrentPage, getLimit, getTotalPages } from "../../../store/selectors/pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { getEventsTotal } from "../../../store/selectors/events";

// export const Paginator = ({getTotalItems}) => {

//   const currentPage = useSelector(getCurrentPage);
//   console.log('current page',currentPage)

//   const totalItems = useSelector(getTotalItems);
//   console.log('items total',totalItems);

//   const numItemsPage = useSelector(getLimit);
//   console.log('num items page',numItemsPage);

//   const dispatch = useDispatch();

//   const totalPages = useSelector(getTotalPages);
//   console.log('total pages', totalPages);

//   // totalItems changed -> modify totalPages
//   // useEffect(() => {
//   //   dispatch(  )
//   // }, [dispatch, totalItems]);



//   return (
//     <div className="d-flex justify-content-center">
//       <Pagination>
//         <Pagination.First disabled/>
//         <Pagination.Prev disabled/>

//         <Pagination.Item active>{1}</Pagination.Item>

//         <Pagination.Next disabled/>
//         <Pagination.Last disabled/>
//       </Pagination>
//     </div>
//   );
// };
