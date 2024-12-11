export PropTypes from "prop-types";
import react, { Component } from "react";

/* This is a class body Section */
class BodySection extends Component {
  render() {
    return (
      <div className="BodySection">
        <h2>{this.props.title}</h2>
	    {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([Proptypes.string, PropTypes.element]),
};

export default BodySection;


