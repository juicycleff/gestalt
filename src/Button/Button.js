// @flow
/* eslint-disable react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Button.css';

type Props = {|
  accessibilityExpanded?: boolean,
  accessibilityHaspopup?: boolean,
  color?: 'gray' | 'red' | 'blue',
  disabled?: boolean,
  inline?: boolean,
  onClick?: () => void,
  text: string,
  type?: 'submit' | 'button',
|}

type GestaltContext = {
  inputDevice: '' | 'key' | 'mouse' | 'touch'
}

export default function Button(props: Props, context: GestaltContext) {
  const {
    accessibilityExpanded,
    accessibilityHaspopup,
    color = 'gray',
    disabled = false,
    inline = false,
    onClick,
    text,
    type = 'button',
  } = props;

  const { inputDevice = 'key' } = context;

  const classes = classnames(styles.button, {
    [styles.disableFocusOutline]: inputDevice !== 'key',
    [styles.disabled]: disabled,
    [styles.enabled]: !disabled,
    [styles[color]]: !disabled,
    [styles.inline]: inline,
    [styles.block]: !inline,
  });

  return (
    <button
      aria-expanded={accessibilityExpanded}
      aria-haspopup={accessibilityHaspopup}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

Button.contextTypes = {
  inputDevice: React.PropTypes.string
};

Button.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'gray', 'red']),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};
