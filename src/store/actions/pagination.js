import { types } from "../types/types";

export const paginationSetLimit = (numItems) => ({
    type: types.paginationSetLimit,
    payload: numItems
});

export const paginationSetTotalPages = (totalPages) => ({
    type: types.paginationSetTotalPages,
    payload: totalPages
});