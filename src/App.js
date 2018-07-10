import React, { Component } from "react";
import { Stage, Layer } from "react-konva";

import Drawing from './component/Drawing';
import Tools from './component/Tools';
import Toolbox from './component/Toolbox';

import Pencil from './component/class/Pencil';
import Eraser from './component/class/Eraser';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toolbox : [
        new Pencil(),
        new Eraser(),
      ],
      toolIndex : 0,
    };
    this.handleOnClickToolBox = this.handleOnClickToolBox.bind(this);
  }

  handleOnClickToolBox(e){
    console.log("TEST");
    console.log(Number(e.target.getAttribute('data-key')));
    console.log(typeof Number(e.target.getAttribute('data-key')));
    this.setState({
      toolIndex : Number(e.target.getAttribute('data-key')),
    });
  }

  render() {
    return (
      <div onContextMenu={ e => e.preventDefault() }>
        <Toolbox toolbox={ this.state.toolbox } handleOnClick={ this.handleOnClickToolBox } />
        <div>
          <Stage width={700} height={700}>
            <Layer>
              <Drawing {...this.state} />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

export default App;
