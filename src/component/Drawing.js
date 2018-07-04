import React, { Component } from "react";
import { connect } from "react-redux";
import { toolConstant } from "../redux/constant";

import { Image } from "react-konva";

class Pencil {  
  constructor(state){
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

      if(this._state.props.tool === toolConstant.PENCIL){
        context.globalCompositeOperation = "source-over";
      } else if(this._state.props.tool === toolConstant.ERASER){
        context.globalCompositeOperation = "destination-out";
      }

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

class Drawing extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDrawing: false,
      canvas: null,
      context: null,
    };
    this.tool = new Pencil(this);
  }

  componentDidMount() {
    this.tool.componentDidMount();
  }

  handleMouseDown = () => {
    this.tool.handleMouseDown();
  };

  handleMouseUp = () => {
    this.tool.handleMouseUp();
  };

  handleMouseMove = () => {
    this.tool.handleMouseMove();
  };

  render() {
    const { canvas } = this.state;

    return (
      <Image
        image={canvas}
        ref={node => (this.image = node)}
        width={300}
        height={300}
        stroke="blue"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  tool : state.selectionTool,
});

export default connect(mapStateToProps)(Drawing);