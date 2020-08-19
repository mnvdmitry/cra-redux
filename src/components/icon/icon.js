import React from 'react';

import { cn } from 'lib/utils/class-names';

import s from './icon.module.css';

export const Icon = ({
  svg: Component,
  className,
  size = 'small',
  attributes
}) => {
  let rootClassName = cn(s.root, className, size && s[`--size-${size}`]);

  let icon = typeof Component === 'object' ? Component : <Component />;

  return (
    <span {...attributes} aria-hidden="true" className={rootClassName}>
      {React.cloneElement(icon, { focusable: false })}
    </span>
  );
};
