const React = require('react')

class ThemedDecorations extends React.Component {
  render () {
    const childNew = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    } )
    return (
      <div>
        {childNew}
      </div>
    )
  }
}

module.exports = ThemedDecorations
