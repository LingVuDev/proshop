import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Rating extends Component {
  render() {
    const { rating, text, color } = this.props;

    const stars = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= rating) {
        stars.push(<i key={index} className="fas fa-star" style={{color}} />);
      } else if (index === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<i key={index} className="fas fa-star-half-alt" style={{color}} />);
      } else {
        stars.push(<i key={index} className="far fa-star" style={{color}} />);
      }
    }

    return (
      <div>
        <span>{stars}</span> {text}
      </div>
    );
  }
}

Rating.defaultProps = {
  color: '#f8e825'
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
