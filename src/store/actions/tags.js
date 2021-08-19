import { getTagsLoaded } from "../selectors/tags";
import { types } from "../types/types";

export const tagsLoadedSuccess = (tags) =>{ 
return({
    type: types.tagsLoadedSuccess,
    payload: {
      data: tags.tags,
    }
})};

export const tagsLoadAction = () => {
    return async function (dispatch, getState, { api }) {
      const tagsLoaded = getTagsLoaded(getState());
      if (tagsLoaded) {
        return;
      }
          try{
            const tags = await api.tags.getTags();
            dispatch(tagsLoadedSuccess(tags));
          }catch(error) {
              // dispatch(tagsLoadedError(error));
          }
  }
};