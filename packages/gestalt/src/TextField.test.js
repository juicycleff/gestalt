// @flow
import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextField from './TextField.js';
import Flyout from './Flyout.js';

describe('TextField', () => {
  it('Renders a Flyout if an error message is passed in', () => {
    const wrapper = shallow(
      <TextField errorMessage="test" id="test" onChange={jest.fn()} />
    );
    wrapper.instance().setState({ errorIsOpen: true });
    wrapper.simulate('focus');
    expect(wrapper.find(Flyout)).toHaveLength(1);
  });

  it('Does not render a Flyout when errorMessage is null', () => {
    const wrapper = shallow(<TextField id="test" onChange={jest.fn()} />);
    expect(wrapper.find(Flyout)).toHaveLength(0);
  });

  it('TextField normal', () => {
    const tree = create(
      <TextField
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TextField with error', () => {
    const tree = shallow(
      <TextField
        errorMessage="error message"
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />
    ).html();
    expect(tree).toMatchSnapshot();
  });

  it('TextField with name', () => {
    const tree = shallow(
      <TextField
        name="email"
        id="email"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />
    ).html();
    expect(tree).toMatchSnapshot();
  });

  it('TextField with autocomplete', () => {
    const tree = shallow(
      <TextField
        autoComplete="on"
        id="email"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />
    ).html();
    expect(tree).toMatchSnapshot();
  });

  it('TextField with errorMessage prop change', () => {
    const tree = shallow(
      <TextField
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />
    );
    expect(tree.find(Flyout)).toHaveLength(0);
    tree.setProps({
      errorMessage: 'error message',
    });
    expect(tree.find(Flyout)).toHaveLength(1);
  });

  it('TextField with type number', () => {
    const tree = shallow(
      <TextField
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
        type="number"
      />
    ).html();
    expect(tree).toMatchSnapshot();
  });
});
