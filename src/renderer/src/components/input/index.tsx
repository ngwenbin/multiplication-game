import clsx from 'clsx'
import './input.css'

interface InputProps {
  inputClassName?: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

const Input = ({ inputClassName, label, defaultValue, placeholder }: InputProps): JSX.Element => (
  <div className="inputContainer">
    {label ? (
      <label htmlFor="formInput" className="inputLabel">
        {label}
      </label>
    ) : null}
    <input
      id="formInput"
      className={clsx('inputBase', inputClassName)}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  </div>
)

export default Input
