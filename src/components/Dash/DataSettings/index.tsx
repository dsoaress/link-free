import { ButtonsStyleSelect } from '../ButtonsStyleSelect'
import { DescriptionInput } from '../DescriptionInput'
import { FontsSelect } from '../FontsSelect'
import { NameInput } from '../NameInput'
import { OutlineCheckbox } from '../OutlineCheckbox'

export function DataSettings() {
  return (
    <div>
      <NameInput />
      <DescriptionInput />
      <FontsSelect />
      <ButtonsStyleSelect />
      <OutlineCheckbox />
    </div>
  )
}
