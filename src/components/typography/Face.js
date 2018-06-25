// import React from 'react';
// import PropTypes from 'prop-types';
//
// class Face extends React.Component {
//   render() {
//     const details = this.props.details;
//     const exampleText = this.props.exampleText;
//     const exampleElement = this.props.exampleElement;
//     return (
//       <div>
//         <p className={`u-alchemy-face-${details.faceClass} u-p u-margin-bottom-none`} key={details.key}>
//           {details.faceName}
//         </p>
//         <p className={`u-${exampleElement}  u-alchemy-face-${details.faceClass}`}>{exampleText}</p>
//       </div>
//     );
//   }
// }
//
// Face.propTypes = {
//   details: PropTypes.object,
//   exampleText: PropTypes.string,
//   exampleElement: PropTypes.string,
// };
//
// export default Face;

import React from 'react';
import PropTypes from 'prop-types';

const Face = ({ typefaces }) => {
  return (
    <div>
      <p className={`u-alchemy-face-${typefaces.faceClass} u-p u-margin-bottom-none`} key={typefaces.key}>
        {typefaces.faceName}
      </p>
    </div>
  );
};

Face.propTypes = {
  typefaces: PropTypes.object.isRequired,
};

export default Face;
