import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const theme = this.props.theme
    const childrenWithClasses = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        className: theme,
      })
    })
    return (
      <div>
        {childrenWithClasses}
      </div>
    )
  }
}

module.exports = ThemedDecorations
