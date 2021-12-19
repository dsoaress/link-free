import { ColorPicker } from 'components/Dash/ColorPicker'

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
        <ColorPicker prop="icons" />
      </div>

      <div>
        <h1>Background</h1>
        <ColorPicker prop="background" />
      </div>

      <div>
        <h1>Buttons</h1>

        <h2>Label</h2>
        <ColorPicker prop="buttonLabelColor" />

        <h2>Background</h2>
        <ColorPicker prop="buttonBackgroundColor" />

        <h2>Border</h2>
        <ColorPicker prop="buttonBorderColor" />
      </div>
    </div>
  )
}
