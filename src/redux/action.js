import { actionConstant } from './constant';

const selectTool = (toolConstant) => ({
  type: actionConstant.SELECTION_TOOL,
  selectionTool: toolConstant,
});

const action = {
  selectTool,
};

export default action;