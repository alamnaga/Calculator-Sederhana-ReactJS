import React from "react";
import "../App.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copy: props.copy,
      company: props.name,
    };
  }
  render() {
    return (
      <p className="footer">
        Copyright {this.props.name} {this.state.copy}
      </p>
    );
  }
}
export default Footer;
