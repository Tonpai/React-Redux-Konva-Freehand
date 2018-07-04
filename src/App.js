import React, { Component } from "react";
import { Stage, Layer } from "react-konva";

import Drawing from './component/Drawing';
import Tools from './component/Tools';

class App extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div onContextMenu={e => e.preventDefault()}>
        <div id='toolbox'>
          <Tools/>
        </div>
        <div>
          <Stage width={700} height={700}>
            <Layer>
              <Drawing />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

export default App;
