import React, { Component } from 'react';
import PropTypes from "prop-types";

import anime from 'animejs';

import { generate, parametric } from './Shared';

// Encryption Particle time step function
function step({ el, offset }, s) {
  const sMod = s * Math.max(Math.sqrt(offset), 0.5) + offset;
  const [x, y] = parametric(sMod);
  const roundScale = particlesLayer.scale < 0.01 ? 0 : particlesLayer.scale;
  el.style.transform = `
          translate3d(${x}px, ${-y}px, 0)
          rotate3d(0, 0, 1, ${-sMod * 360 + 90}deg)
          scale3d(${roundScale}, ${roundScale}, 1)
        `;
}

// animejs particles layer (handles the scaling part)
const particlesLayer = {
  scale: 0,
};

// animejs timelines for in/out animations
const timelineIn = anime.timeline({
  autoplay: false,
});
const timelineOut = anime.timeline({
  autoplay: false,
});

// Encryption animatoin loop
let particles, frameId;
function update(ms) {
  const s = ms / 1000;
  if (!particles) return;
  particles.forEach(p => {
    step(p, s);
  });
  frameId = window.requestAnimationFrame(update);
}

/**
 * @param step {String} - either 'loading' or 'done'. 'done' ends animation
 * @param onComplete {Function} - onComplete callback
 * @param Title {String} - title that will be shown below the spinner
 * @returns {*}
 */
class Encrypting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.textRef = React.createRef();
    this.ringRef = React.createRef();
    this.particlesRef = React.createRef();
    this.containerRef = React.createRef();

    this.start = this.start.bind(this);
    this.done = this.done.bind(this);
    this.destroy = this.destroy.bind(this);

    this.onComplete = this.onComplete.bind(this);
  }
  componentDidMount() {
    particles = generate(this.particlesRef.current);
    frameId = window.requestAnimationFrame(update);
    this.mountTimelines();

    // In case component starts in loading state
    if (this.props.step === 'loading') {
      this.start();
    }
  }
  componentWillUnmount() {
    this.destroy();
  }
  componentWillReceiveProps(next, prev) {
    if (prev.step === next.step) return;
    if (next.step === 'loading') {
      this.start();
    }
    if (next.step === 'done') {
      this.done();
    }
  }
  destroy() {
    // Clean up listeners and avoid memory leaks
    window.cancelAnimationFrame(frameId);
    anime.remove([
      this.containerRef.current,
      this.ringRef.current,
      this.textRef.current,
      particlesLayer,
    ]);
  }
  start() {
    timelineIn.play();
  }
  done() {
    timelineOut.play();
  }
  onComplete() {
    if (this.props.onComplete) this.props.onComplete();
  }
  mountTimelines() {
    // Mount timeline OUT first
    timelineOut
      .add(
        {
          targets: particlesLayer,
          scale: [1, 0],
          duration: 300,
          easing: 'easeInCubic',
        },
        0
      )
      .add(
        {
          targets: this.containerRef.current,
          opacity: [1, 0],
          duration: 300,
          easing: 'easeOutCubic',
          complete: this.onComplete,
        },
        250
      );

    timelineIn
      .add(
        {
          targets: this.containerRef.current,
          opacity: [0, 1],
          duration: 300,
          easing: 'easeOutCubic',
        },
        0
      )
      .add(
        {
          targets: this.ringRef.current,
          'stroke-dashoffset': [748, 1000],
          rotate: [-50, -245],
          duration: 1333,
          easing: 'easeInOutCubic',
        },
        100
      )
      .add(
        {
          targets: this.textRef.current,
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 500,
          easing: 'easeOutCubic',
        },
        150
      )
      .add(
        {
          targets: particlesLayer,
          scale: [0, 1],
          duration: 1000,
          easing: 'easeInOutCubic',
        },
        150
      );
  }
  render() {
    return (
      <div>
        <div
          ref={this.containerRef}
          style={{
            opacity: 0,
            position: 'relative',
            width: 90,
            height: 90,
          }}
        >
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          >
            <circle
              ref={this.ringRef}
              style={{
                transformOrigin: 'center center',
              }}
              cx="45"
              cy="45"
              r="40"
              stroke="#4484FF"
              strokeWidth="9"
              strokeDasharray="1000px"
              strokeDashoffset="748px"
            />
          </svg>
          <svg
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              margin: '-13px 0 0 -10px',
            }}
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.133301 29.564V1.29701H7.51787V19.3624V19.6061C11.7407 17.4472 17.4163 12.884 17.4163 3.95148C17.4163 1.89809 19.0695 0.23362 21.1088 0.23362C23.1477 0.23362 24.8003 1.89809 24.8003 3.95148C24.8003 19.9367 11.5716 26.8126 4.61043 28.6345C4.61043 28.6345 1.73915 29.3583 0.133301 29.564Z"
              fill="#4585FF"
            />
          </svg>
          <div
            style={{
              position: 'relative',
              width: 90,
              height: 90,
            }}
            ref={this.particlesRef}
          />
          <div
            ref={this.textRef}
            style={{
              position: 'absolute',
              width: '100%',
              bottom: '-32px',
              color: '#36404f',
              fontSize: 12,
              fontFamily: 'Open Sans',
              textAlign: 'center',
            }}
          >
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

Encrypting.propTypes = {
  step: PropTypes.oneOf(['loading', 'done']).isRequired,
  onComplete: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Encrypting.defaultProps = {
  title: '',
};


export default Encrypting;