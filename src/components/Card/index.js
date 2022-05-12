import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

function Card({children, hoverable, title}) {
  return (
    <div className={classNames(
      styles.card,
      hoverable && styles.hoverable,
    )}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  );
}

export default Card;
