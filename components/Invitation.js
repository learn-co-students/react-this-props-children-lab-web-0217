const React = require('react');

class Invitation extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return (
        <div>{child}</div>
      )
    })

    return(
      <div>
        <h1>You've been invited!</h1>
        {children}
      </div>
    )
  }
}

module.exports = Invitation
