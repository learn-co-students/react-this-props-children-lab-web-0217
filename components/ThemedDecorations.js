import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const addPropToChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return (
      <div>
        {addPropToChildren}
      </div>
    )
  }
}

module.exports = ThemedDecorations
