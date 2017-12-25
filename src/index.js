import React from 'react';
import { bool, string, number } from 'prop-types';

const randomID = `svg-${Math.random()
  .toString(36)
  .substr(2, 5)}`;

const InlineSVG = ({ icon, size, label, isTest, ...rest }) => {
  const titleID = isTest ? 'id0' : randomID;
  const a11yTitle = label ? `<title id=${titleID}>Icon - ${label}</title` : '<title></title';
  const width = size ? `width="${size}"` : '';
  const height = size ? `height="${size}"` : '';
  const labelledBy = label ? `aria-labelledby="${titleID}"` : '';

  const comp = icon.replace(
    /<svg([^>]*)/g,
    `<svg role="img" ${labelledBy} ${width} ${height} $1>${a11yTitle}`
  );

  return <span {...rest} dangerouslySetInnerHTML={{ __html: comp }} />;
};

InlineSVG.propTypes = {
  icon: string.isRequired,
  size: number,
  label: string,
  isTest: bool
};

InlineSVG.defaultProps = {
  size: null,
  label: '',
  isTest: false
};

export default InlineSVG;
