import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

function Button({children, hoverable, disabled, primary, secondary}) {
  return (
    <button className={classNames(
      styles.button,
      hoverable && styles.hoverable,
      primary && styles.primary,
      secondary && styles.secondary,
    )} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
