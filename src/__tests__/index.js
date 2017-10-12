import React from 'react';
import renderer from 'react-test-renderer';

import InlineSVG from '..';

describe('Component: InlineSVG', () => {
  const Icon = '<svg viewBox="0 0 21 21"><path d="M13 23h7V8L10 .631 0 8v15h7v-7h6v7z"/></svg>';
  it('should match content with specified props', () => {
    const tree = renderer.create(<InlineSVG icon={Icon} size={20} label="home - house" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
