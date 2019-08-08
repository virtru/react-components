import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';

const Modal = ({ title, children, footer, isOpened }) =>
  isOpened && (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  isOpened: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  footer: null,
};

export default Modal;
