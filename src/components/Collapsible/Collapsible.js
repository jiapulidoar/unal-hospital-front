import React, { Component } from "react";
import PropTypes from 'prop-types';
import "bulma/css/bulma.css";
import './Collapsible.scss';
import { isBreakOrContinueStatement } from "typescript";


class Collapsible extends Component {
  constructor(props){
    super(props);
    this.state = {
      isExpanded: false
    }
  }

  toggle(){
    this.setState((prevState)=>({
      isExpanded: !prevState.isExpanded
    }));
  }

  render(){
    return(
      <div class="card">
        <header class="card-header">
          <div className="custom-card-title">
            <p className="card-title">
              {this.props.title}
            </p>
            <p className="card-subtitle">
              {this.props.subtitle}
            </p>
          </div>
          <a class="card-header-icon" aria-label="more options" onClick={()=>this.toggle()}>
            {this.props.arrow_text}
            <span class="icon">
              <i class={`fa fa-angle-${this.state.isExpanded ? 'down':'right'}`} aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class={`card-content ${this.state.isExpanded ? 'is-expanded':''}`}>
          <div class="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Collapsible.propTypes = {
  title: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  subtitle: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  arrow_text: PropTypes.string,
}

export default Collapsible;