import React from "react";
import { bool, string, number } from "prop-types";

let getLabelID = (label, size, isTest) =>
  isTest
    ? "id0"
    : `${label
        .toString()
        .toLowerCase()
        .split(" ")
        .join("-")}--${size || 0}`;

const InlineSVG = ({ icon, size, label, isTest = false, ...rest }) => {
  let labelID = label || "";
  let titleID = labelID && getLabelID(labelID, size, isTest);
  let width = size ? `width="${size}"` : "";
  let height = size ? `height="${size}"` : "";

  const a11yTitleTag = label
    ? `<title id=${titleID}>Icon - ${label}</title`
    : "<title></title";

  const comp = icon.replace(
    /<svg([^>]*)/g,
    `<svg role="img" ${width} ${height} aria-labelledby="${titleID}" $1>${a11yTitleTag}`
  );

  return <span dangerouslySetInnerHTML={{ __html: comp }} {...rest} />;
};

InlineSVG.propTypes = {
  icon: string.isRequired,
  size: number,
  label: string,
  isTest: bool
};

InlineSVG.defaultProps = {
  size: null,
  label: "",
  isTest: false
};

export default InlineSVG;
