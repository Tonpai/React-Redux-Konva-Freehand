class Tool {
  constructor(name="Tool", state){
    this._name = name;
    this._state = state;
  }

  getName(){
    return this._name;
  }
};

export default Tool;