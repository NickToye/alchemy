import React from 'react';

class AnimationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnimation: '',
      animationTypes: ['Fades', 'Bounces', 'Attention Seeking', 'Lightspeed', 'Slides'],
      animationTypePick: 'Fades'
    };

    this.animateAction = this.animateAction.bind(this);
    this.showAnimationTypePick = this.showAnimationTypePick.bind(this);

  }

  showAnimationTypePick(e) {
    this.setState({ animationTypePick: e.target.value });
  }

  animateAction(e) {
    this.setState({ activeAnimationClass: e.target.value });
    setTimeout(function () {
      this.setState({ activeAnimationClass: ''});
    }.bind(this), 3000);
  }


  render() {

    const animations = [
      {
        animation: 'Fade Out',
        animateClass: 'fadeOut',
        animationType: 'Fades',
      },
      {
        animation: 'Fade In',
        animateClass: 'fadeIn',
        animationType: 'Fades',
      },
      {
        animation: 'Fade In Up',
        animateClass: 'fadeInUp',
        animationType: 'Fades',
      },
      {
        animation: 'Fade Out Down',
        animateClass: 'fadeOutDown',
        animationType: 'Fades',
      },
      {
        animation: 'Bounce In',
        animateClass: 'bounceIn',
        animationType: 'Bounces'
      },
      {
        animation: 'Bounce Out',
        animateClass: 'bounceOut',
        animationType: 'Bounces'
      },
      {
        animation: 'Bounce',
        animateClass: 'bounce',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Flash',
        animateClass: 'flash',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Pulse',
        animateClass: 'pulse',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Shake',
        animateClass: 'shake',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Swing',
        animateClass: 'swing',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Tada',
        animateClass: 'tada',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Wiggle',
        animateClass: 'wiggle',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Wobble',
        animateClass: 'wobble',
        animationType: 'Attention Seeking',
      },
      {
        animation: 'Lightspeed In',
        animateClass: 'lightSpeedIn',
        animationType: 'Lightspeed'
      },
      {
        animation: 'Lightspeed Out',
        animateClass: 'lightSpeedOut',
        animationType: 'Lightspeed'
      },
      {
        animation: 'Slide In Left',
        animateClass: 'slideInLeft',
        animationType: 'Slides'
      },
      {
        animation: 'Slide In Right',
        animateClass: 'slideInRight',
        animationType: 'Slides'
      },
      {
        animation: 'Slide In Up',
        animateClass: 'slideInUp',
        animationType: 'Slides'
      },
      {
        animation: 'Slide In Down',
        animateClass: 'slideInDown',
        animationType: 'Slides'
      },
      {
        animation: 'Slide Out Left',
        animateClass: 'slideOutLeft',
        animationType: 'Slides'
      },
      {
        animation: 'Slide Out Right',
        animateClass: 'slideOutRight',
        animationType: 'Slides'
      },
      {
        animation: 'Slide Out Up',
        animateClass: 'slideOutUp',
        animationType: 'Slides'
      },
      {
        animation: 'Slide Out Down',
        animateClass: 'slideOutDown',
        animationType: 'Slides'
      }
    ];

    const selectedAnimationType = this.state.animationTypePick;

    const animationsList = animations.filter(function(filteredAnimations) {
      return filteredAnimations.animationType === selectedAnimationType;
    }).map((animate, filteredAnimations) => {
        return (
          <button className="c-btn c-btn--rounded  c-btn--secondary2" key={animate.key} value={animate.animateClass} onClick={this.animateAction}>{animate.animation}</button>
        );
      });

      const animationTypePick = this.state.animationTypePick;

      const animationTypeList = this.state.animationTypes.map((type, key) => {
        const isCurrent = this.state.animationTypePick === type;
        return (
          <button
            className={
              `c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')
            }
            key={key}
            value={type}
            onClick={this.showAnimationTypePick}
          >
            <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
            {type}
          </button>
        );
      });




    return (
      <section className="o-section u-padding u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
          {animationTypeList}
        </div>
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-none">Animations</h2>
          <p>A tool to display animations available to elements.</p>
        </header>

        <div className="u-margin-bottom">
          <h2>{this.state.animationTypePick}</h2>
          <div className={`a-animations  u-padding  u-alchemy-primary-bg  u-margin-bottom  animated ` + this.state.activeAnimationClass} />
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {animationsList}
          </div>
        </div>

      </section>
    );
  }

}

export default AnimationsCard;
