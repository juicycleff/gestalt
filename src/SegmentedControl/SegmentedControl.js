// @flow

import classnames from 'classnames/bind';
import React, { PropTypes } from 'react';
import Text from '../Text/Text';
import styles from './SegmentedControl.css';

const cx = classnames.bind(styles);

type Props = {
  items: Array<any>,
  onChange: (i: number, e: Event) => void,
  selectedItemIndex: number
};

export default function SegmentedControl(props: Props) {
  const {
    items,
    onChange,
    selectedItemIndex,
  } = props;
  const itemWidth = 1 / items.length;
  return (
    <div className={cx('SegmentedControl')} role="tablist">
      {items.map((item, i) => {
        const isSelected = i === selectedItemIndex;
        const cs = cx('SegmentedControl--item', {
          'SegmentedControl--item__isNotSelected': !isSelected,
          'SegmentedControl--item__isSelected': isSelected,
        });
        return (
          <button
            className={cs}
            key={i}
            onClick={e => onChange(i, e)}
            role="tab"
            style={{ width: `${itemWidth}%` }}
          >
            <Text
              bold
              color={isSelected ? 'dark-gray' : 'gray'}
              align="center"
              truncate
              size="lg"
            >
              {item}
            </Text>
          </button>
        );
      })}
    </div>
  );
}

SegmentedControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};
