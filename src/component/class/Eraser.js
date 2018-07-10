import Tool from './Tool';

class Eraser extends Tool{  
  constructor(state){
    super("Eraser");
    this._state = state;
  }

  setState(state){
    this._state = state;
  }

  componentDidMount(){
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext("2d");

    this._state.setState({ canvas, context });
  }
  handleMouseDown(){
    this._state.setState({ isDrawing: true });
    const stage = this._state.image.getStage();
    this._state.lastPointerPosition = stage.getPointerPosition();
  }
  handleMouseUp(){
    this._state.setState({ isDrawing: false });
  }
  handleMouseMove(){
    const { context, isDrawing } = this._state.state;

    if (isDrawing) {
      context.strokeStyle = "#df4b26";
      context.lineJoin = "round";
      context.lineWidth = 5;

      context.globalCompositeOperation = "destination-out";

      context.beginPath();

      var localPos = {
        x: this._state.lastPointerPosition.x - this._state.image.x(),
        y: this._state.lastPointerPosition.y - this._state.image.y()
      };
      context.moveTo(localPos.x, localPos.y);

      const stage = this._state.image.getStage();

      var pos = stage.getPointerPosition();
      localPos = {
        x: pos.x - this._state.image.x(),
        y: pos.y - this._state.image.y()
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      this._state.lastPointerPosition = pos;
      this._state.image.getLayer().draw();
    }
  }
}

export default Eraser;