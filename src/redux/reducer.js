import { toolConstant, actionConstant } from './constant';

const initialState = {
  selectionTool : toolConstant.PENCIL,
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case actionConstant.SELECTION_TOOL :
      return {
        ...state,
        selectionTool : action.selectionTool
      };
    default :
      return state;
  }
}

export default reducer;