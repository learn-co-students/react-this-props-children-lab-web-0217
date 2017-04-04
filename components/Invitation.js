import React from 'react';

class Invitation extends React.Component {
  render() {
    // const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
    //   return (
    //     <h2>child</h2>
    //   );
    // });

    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    );
  }
}
module.exports = Invitation
