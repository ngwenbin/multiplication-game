import clsx from 'clsx'
import './input.css'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  id: string
  type?: HTMLInputTypeAttribute
  inputClassName?: string
  label?: string
  defaultValue?: string
  placeholder?: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  id,
  type,
  inputClassName,
  label,
  defaultValue,
  placeholder,
  onKeyDown,
  onInputChange
}: InputProps): JSX.Element => (
  <div className="inputContainer">
    {label ? (
      <label htmlFor="formInput" className="inputLabel">
        {label}
      </label>
    ) : null}
    <input
      id={id}
      name={id}
      type={type}
      className={clsx('inputBase', inputClassName)}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onInput={onInputChange}
    />
  </div>
)

export default Input
