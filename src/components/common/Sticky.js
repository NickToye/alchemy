import React from 'react';
import PropTypes from 'prop-types';

class Sticky extends React.Component {
  componentDidMount() {
    const setInitialHeights = elements => {
      [].forEach.call(elements, sticky => {
        sticky.setAttribute('data-sticky-initial', sticky.getBoundingClientRect().top);
      });
    };

    const stickies = document.querySelectorAll('[data-sticky]');
    setInitialHeights(stickies);

    document.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;

      [].forEach.call(stickies, sticky => {
        const stickyInitial = Math.floor(sticky.getAttribute('data-sticky-inital'), 10);
        const stickyEnter = Math.floor(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
        const stickyExit = Math.floor(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

        if (top >= stickyEnter && top <= stickyExit) {
          sticky.classList.add('sticky');
        } else {
          sticky.classList.remove('sticky');
        }
      });
    });
  }

  render() {
    const { className, enter, exit, children } = this.props;
    return (
      <div className={`Sticky ${className}`} data-sticky data-sticky-enter={enter} data-sticky-exit={exit}>
        {children}
      </div>
    );
  }
}

Sticky.propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  children: PropTypes.node,
};

export default Sticky;
