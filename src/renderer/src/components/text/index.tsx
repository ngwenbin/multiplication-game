import React from 'react'
import './text.css'
import clsx from 'clsx'

const textTypes = [
  'display-2xl',
  'display-lg',
  'display-md',
  'display-sm',
  'subhead_medium',
  'subhead_small',
  'body_medium',
  'body_small'
] as const
type TextTypes = (typeof textTypes)[number]
const textTypeMapping: Record<TextTypes, string> = {
  'display-2xl': 'display-2xl',
  'display-lg': 'display-lg',
  'display-md': 'display-md',
  'display-sm': 'display-sm',
  body_small: 'body-small',
  body_medium: 'body-medium',
  subhead_small: 'subhead-small',
  subhead_medium: 'subhead-medium'
}

export interface TextProps {
  children: React.ReactNode
  type?: TextTypes
  className?: string
}

const Text = ({ children, className, type = 'body_medium' }: TextProps) => {
  const classes = clsx(textTypeMapping[type], className)
  return <div className={classes}>{children}</div>
}

export default Text
