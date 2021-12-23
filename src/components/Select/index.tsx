import { FiArrowDown } from 'react-icons/fi'
import { useRef } from 'react'

import { SelectWrapper, Label, Wrapper } from './styles'

import type { SelectHTMLAttributes } from 'react'
import type { IconType } from 'react-icons/lib'

type InputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  icon?: IconType
  options: {
    value: string
    label: string
  }[]
}

export function Select({ label, icon: Icon, options, ...rest }: InputProps) {
  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      <SelectWrapper onClick={() => selectRef?.current?.focus()}>
        {!!Icon && <Icon />}
        <select ref={selectRef} {...rest}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FiArrowDown />
      </SelectWrapper>
    </Wrapper>
  )
}
