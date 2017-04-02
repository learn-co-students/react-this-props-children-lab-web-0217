const React = require('react')

class ThemedDecorations extends React.Component {
  render () {
    const childrenWithExtraPop = React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {
      className: this.props.theme,
    })
  })

  return (
    <div>
    {childrenWithExtraPop}
    </div>
  )
  }
}

module.exports = ThemedDecorations
