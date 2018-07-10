import Toolbox from '../component/class/Toolbox';
import Pencil from '../component/class/Pencil';
import Eraser from '../component/class/Eraser';

describe('Toolbox Class', () => {
  it('Toolbox.toolIndex should start with 0.', () => {
    let toolBox = new Toolbox(new Pencil(), new Eraser());
    const expectedResult = 0;
    expect(toolBox.getCurrentToolIndex()).toEqual(expectedResult);
  });

  it('Toolbox.getCurrentToolName() should be return current tool name.', () => {
    let toolBox = new Toolbox(new Pencil(), new Eraser());
    const expectedResult = "Pencil";
    expect(toolBox.getCurrentToolName()).toEqual(expectedResult);
  });

  it('Toolbox.getAllToolName() should be return Array of Tool Name', () => {
    let toolBox = new Toolbox(new Pencil(), new Eraser());
    const expectedResult = ["Pencil", "Eraser"];
    expect(toolBox.getAllToolName()).toEqual(expectedResult);
  });

});