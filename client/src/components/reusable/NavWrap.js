import React from "react";

/**
 *
 * @param {*} props
 * This list item wrapper is made to be placed inside of a Nav element in place of a li. This is because the Nav component
 * tries to pass unneeded props activeHref and activeKey to li which is a DOM component and React throws a warning
 * in the browser.
 */
export const NavWrap = props => {
  /* eslint-disable */
  const { active, activeKey, activeHref, onSelect, children, ...otherProps } = props;
  /* eslint-enable */

  return (
    <li role="presentation" {...otherProps}>
      {children}
    </li>
  );
};
