const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const theme = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return(
      <div>
        {theme}
      </div>
    )
  }
}

module.exports = ThemedDecorations
