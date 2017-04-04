let React = require('react')

  class ThemedDecorations extends React.Component {
    render(){
      let themedChildren = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          className: this.props.theme
        })
      })
      return (
        <div>{themedChildren}</div>
      )
    }
  }

module.exports = ThemedDecorations;
