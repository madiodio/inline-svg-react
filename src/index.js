import React from 'react';
import { string, number } from 'prop-types';

const randomID = `svg-${Math.random()
  .toString(36)
  .substr(2, 5)}`;

const SVG = ({ icon, size, label, ...rest }) => {
  const isA11y = label ? `<title id="${randomID}">Icon - ${label}</title` : null;
  const comp = icon.replace(
    /<svg[^>]*/g,
    `<svg
      role="img"
      aria-labelledby="${label ? randomID : null}"
      width="${size}"
      height="${size}"
    >${isA11y}`
  );

  return <span {...rest} dangerouslySetInnerHTML={{ __html: comp }} />;
};

SVG.propTypes = {
  icon: string.isRequired,
  size: number.isRequired,
  label: string
};

SVG.defaultProps = {
  label: ''
};

export default SVG;
