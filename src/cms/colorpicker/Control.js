// Color Picker by Felix Böttcher
// https://github.com/felixboet/netlify-cms-widget-colorpicker

import React from 'react'
import PropTypes from 'prop-types'
import {
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color'
import validateColor from 'validate-color'

const DEFAULT_PICKER = 'chrome'

const Picker = {
  block: BlockPicker,
  chrome: ChromePicker,
  circle: CirclePicker,
  compact: CompactPicker,
  github: GithubPicker,
  sketch: SketchPicker,
  swatches: SwatchesPicker,
  twitter: TwitterPicker
}

export class Control extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.value,
    picker: this.props.field.get('picker') || DEFAULT_PICKER,
    disableAlpha: this.props.field.get('disableAlpha') || 'false',
    colors: this.props.field.get('colors') || [
      '#FF6900',
      '#FCB900',
      '#7BDCB5',
      '#00D084',
      '#8ED1FC',
      '#0693E3',
      '#ABB8C3',
      '#EB144C',
      '#F78DA7',
      '#9900EF'
    ]
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }
  handleChange = color => {
    const formatedColor =
      color.rgb.a < 1
        ? `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
        : color.hex
    this.setState({ color: formatedColor })
    this.props.onChange(formatedColor)
  }
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props
    const DynamicPicker = Picker[this.state.picker]
    return (
      <>
        {' '}
        <div
          style={{
            position: 'absolute',
            zIndex: '1',
            background:
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")',
            height: '38px',
            width: '48px',
            marginTop: '10px',
            marginLeft: '10px',
            borderRadius: '5px'
          }}
        />
        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            background: validateColor(this.props.value)
              ? this.props.value
              : '#fff',
            cursor: 'pointer',
            height: '38px',
            width: '48px',
            marginTop: '10px',
            marginLeft: '10px',
            borderRadius: '5px',
            border: '2px solid rgb(223, 223, 227)',
            textAlign: 'center',
            fontSize: '27px',
            lineHeight: '1',
            paddingTop: '4px',
            color: validateColor(this.props.value)
              ? 'rgba(255, 255, 255, 0)'
              : 'rgb(223, 223, 227)'
          }}
          onClick={this.handleClick}
        >
          ?
        </div>
        {this.state.displayColorPicker ? (
          <div
            style={{
              position: 'absolute',
              zIndex: '3',
              marginTop: '48px',
              marginLeft: '12px'
            }}
          >
            <div
              style={{
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
              }}
              onClick={this.handleClose}
            />
            <DynamicPicker
              color={value || ''}
              onChange={this.handleChange}
              triangle={'hide'}
              //colors={this.state.colors}
              //presetColors={this.state.colors}
            />
          </div>
        ) : null}
        <input
          type="text"
          id={forID}
          //readOnly={true}
          className={classNameWrapper}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          style={{ paddingLeft: '75px' }}
        />
      </>
    )
  }
}

Control.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired
}

Control.defaultProps = {
  value: ''
}
