import React, { Component, isValidElement, Children, createElement } from "react";

class Detect extends Component {
  constructor(){
    super();
    this.state = {
      online: navigator.onLine,
    };
    
  }
}
