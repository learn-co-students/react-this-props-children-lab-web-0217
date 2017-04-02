const React = require('react')

class ThemedDecorations extends React.Component {
  render() {
    const themedDecorations = React.Children.map(this.props.children, child => {
      return (
        React.cloneElement(child, {
          className: this.props.theme
        })
      )})

    return (
      <div>
        {themedDecorations}
      </div>
    )
  }
}


module.exports = ThemedDecorations
