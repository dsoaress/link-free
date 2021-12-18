import { ColorPicker } from '../ColorPicker'

export function ColorsSettings() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        flex: 1
      }}
    >
      <div>
        <h1>Texts</h1>
        <ColorPicker prop="texts" />
      </div>

      <div>
        <h1>Icons</h1>
        <ColorPicker prop="socialLinks" />
      </div>

      <div>
        <h1>Buttons</h1>
        <ColorPicker prop="buttonLinks" />
      </div>

      <div>
        <h1>Background</h1>
        <ColorPicker prop="background" />
      </div>
    </div>
  )
}
