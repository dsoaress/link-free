import { ColorSelect } from '../ColorSelect'

export function ColorsSettings() {
  return (
    <div>
      <h1>Texts</h1>
      <ColorSelect prop="texts" />

      <h1>Icons</h1>
      <ColorSelect prop="socialLinks" />

      <h1>Buttons</h1>
      <ColorSelect prop="buttonLinks" />

      <h1>Background</h1>
      <ColorSelect prop="background" />
    </div>
  )
}
