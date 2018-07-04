import React, { Component } from 'react';
import { connect } from 'react-redux';

import action from '../redux/action';
import { toolConstant } from '../redux/constant';


class Tools extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <div id="current-tools">
          tools : { this.props.tool }
        </div>
        <div id="switch-tools-button">
          <input type="button" value="Pencil" onClick={ () => { this.props.selectTool(toolConstant.PENCIL) } } />
          <input type="button" value="Eraser" onClick={ () => { this.props.selectTool(toolConstant.ERASER) } } />
        </div>
        <div style={ {color: 'red'} }>*tool is change in redux</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tool : state.selectionTool,
});

const mapDispatchToProps = (dispatch) => ({
  selectTool : (toolConstant) => { dispatch(action.selectTool(toolConstant)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);