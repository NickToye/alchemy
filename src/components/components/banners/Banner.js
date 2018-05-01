import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  render() {
    const canvas = this.props.canvas;
    const textCanvas = this.props.textCanvas;
    const showText = this.props.showText;
    const textPosition = this.props.textPosition;
    return (
      <div className={`c-banner  u-alchemy-${canvas}-bg  u-padding  o-flex`}>
        {showText ? (
          <div className={`c-banner__text  u-alchemy-${textPosition}  u-alchemy-${textCanvas}-bg  u-padding`}>
            <h2>Headline</h2>

            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus
              ac cursus commodo, tortor mauris condimentum nibh, Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Banner.propTypes = {
  canvas: PropTypes.string,
  showText: PropTypes.bool,
  textCanvas: PropTypes.string,
  textPosition: PropTypes.string,
};

export default Banner;
