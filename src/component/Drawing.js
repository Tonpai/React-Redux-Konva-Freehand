import React, { Component } from "react";
import { connect } from "react-redux";

import { Image } from "react-konva";

class Drawing extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDrawing: false,
      canvas: null,
      context: null,
    };
  }

  componentDidMount() {

    const { toolbox, toolIndex } = this.props;

    this.tool = toolbox[toolIndex];
    this.tool.setState(this);
    console.log(this.tool.getName());


    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext("2d");

    this.setState({ canvas, context });
    // this.tool.componentDidMount();
  }
  
  componentDidUpdate(){
    const { toolbox, toolIndex } = this.props;

    this.tool = toolbox[toolIndex];
    this.tool.setState(this);
    console.log(this.tool.getName());
  }

  handleMouseDown = () => {
    const { toolbox, toolIndex } = this.props;

    this.tool = toolbox[toolIndex];
    this.tool.setState(this);
    console.log(this.tool.getName());

    this.tool.handleMouseDown();
  };

  handleMouseUp = () => {
    const { toolbox, toolIndex } = this.props;

    this.tool = toolbox[toolIndex];
    this.tool.setState(this);
    console.log(this.tool.getName());
    
    this.tool.handleMouseUp();
  };

  handleMouseMove = () => {
    const { toolbox, toolIndex } = this.props;

    this.tool = toolbox[toolIndex];
    this.tool.setState(this);
    console.log(this.tool.getName());

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
        onDragMove={ true }
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