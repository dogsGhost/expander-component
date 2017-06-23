import React, { Component } from 'react'
import './Expander.css'

/*
  Accepts following props:
    `dataset`: an array of at least 1 object. Each object should have a `title` property and a `content` property.
    `customClass`: optional classname to be added to component container.
    `showFirst`: optional if you want the first section expanded by default
 */
class Expander extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // check if they want first item shown by default
      activeKey: this.props.showFirst ? 0 : -1
    }
    this._handleClick = this._handleClick.bind(this)
    this.cb = this.props.onExpand
  }

  _handleClick(e) {
    // get index of section, cast from string to number
    const val = Number(e.target.dataset.index)
    // if val matches activeKey, it means that section is already active
    // so set to `-1` so no section indexes are matched, collapsing that section
    // otherwise just set it to the new val
    const newVal = val === this.state.activeKey ? -1 : val
    this.setState({
      activeKey: newVal
    })
  }

  render() {
    // sanity check that there's data
    const dataset = this.props.dataset
    if (!dataset || !dataset.length) {
      throw Error('dataset prop invalid')
    }
    // map over dataset and generate markup for each section
    const content = dataset.map((data, i) => {
      // check if section is expanded section
      const isActive = this.state.activeKey === i
      // return element
      // bind handler to title element
      // we check if the section is active and only show the content if it is
      return (
        <div className="Expander-section" key={i}>
          <div
              className={'Expander-title' + (isActive ? ' is-active' : '')}
              onClick={this._handleClick}
              data-index={i}>
            {data.title}
          </div>
          {
            isActive ?
              <div className="Expander-content">{data.content}</div> :
              null
            }
        </div>
      )
    })

    // return component
    return (
      <div className={'Expander ' + (this.props.customClass || '')}>
        {content}
      </div>
    )
  }
}

export default Expander