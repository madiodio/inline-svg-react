import React from 'react';
import { string, number } from 'prop-types';

const randomID = `svg-${Math.random()
  .toString(36)
  .substr(2, 5)}`;

const InlineSVG = ({ icon, size, label, ...rest }) => {
  const a11yTitle = `<title id="${randomID}">Icon - ${label}</title`;
  const width = size ? `width="${size}"` : null;
  const height = size ? `height="${size}"` : null;
  const labelledBy = label ? `aria-labelledby="${label}"` : null;

  const comp = icon.replace(
    /<svg[^>]*/g,
    `<svg role="img" ${labelledBy} ${width} ${height}>${a11yTitle}`
  );

  return <span {...rest} dangerouslySetInnerHTML={{ __html: comp }} />;
};

InlineSVG.propTypes = {
  icon: string.isRequired,
  size: number.isRequired,
  label: string
};

InlineSVG.defaultProps = {
  label: ''
};

export default InlineSVG;
