// Slider by Jaclyn Tan
// https://github.com/jaclyntan/netlify-cms-widget-rating

import PropTypes from 'prop-types'
import React from 'react'
import './styles.css'

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired
  }
  static defaultProps = {
    value: '0'
  }

  render() {
    const { forID, value, onChange, classNameWrapper } = this.props

    var inputStyle = {
      position: 'absolute',
      top: '-10px',
      left: '0',
      width: '100%',
      height: '100%',
      padding: '0',
      margin: '0',
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      color: 'transparent',
      overflow: 'visible'
    }

    return (
      <div className={classNameWrapper}>
        <div className="range-wrapper">
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            id={forID}
            className={classNameWrapper}
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            style={inputStyle}
          />
          <div className="custom-track">
            <span className="custom-fill"></span>
            <span className="custom-thumb"></span>
          </div>
          <output for={forID} aria-hidden="true" className="curr-value">
            {value || ''}
          </output>
        </div>
      </div>
    )
  }
}
