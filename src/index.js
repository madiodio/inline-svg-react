import React from 'react';
import { string, number } from 'prop-types';

const randomID = `svg-${Math.random()
  .toString(36)
  .substr(2, 5)}`;

const InlineSVG = ({ icon, size, label, ...rest }) => {
  const a11yTitle = label ? `<title id="${randomID}">Icon - ${label}</title` : '<title></title';
  const width = size ? `width="${size}"` : '';
  const height = size ? `height="${size}"` : '';
  const labelledBy = label ? `aria-labelledby="${randomID}"` : '';

  const comp = icon.replace(
    /<svg([^>]*)/g,
    `<svg role="img" ${labelledBy} ${width} ${height} $1>${a11yTitle}`
  );

  return <span {...rest} dangerouslySetInnerHTML={{ __html: comp }} />;
};

InlineSVG.propTypes = {
  icon: string.isRequired,
  size: number,
  label: string
};

InlineSVG.defaultProps = {
  size: null,
  label: ''
};

export default InlineSVG;
