import { types } from "../types/types";

export const setNumItemsPage = (numItems) => ({
    type: types.paginationSetNumItemsPage,
    payload: numItems
});