import React from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge';

const Button = ({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }) => {
  console.log(rest);
  const classes = twMerge(
    classNames('px-3 py-2 border flex items-center', {
      'border-blue-500 bg-blue-600 text-white': primary,
      'border-gray-700 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-600 text-white': success,
      'border-yellow-500 bg-yellow-500 text-white': warning,
      'border-red-500 bg-red-600 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-green-500': outline && success,
      'text-secondary-700': outline && secondary,
      'text-red-500': outline && danger
    })
  )
  return (
    <div>

      <button {...rest} className={classes}>{children}</button>
    </div>
  )
}

Button.propTypes = {
  checkValuetionValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
    // console.log(Number(!!primary));
    // console.log(count);
    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger  can be true')
    }
  }
}

export default Button
