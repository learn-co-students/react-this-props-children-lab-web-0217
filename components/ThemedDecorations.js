import React from 'react'

export default class ThemedDecorations extends React.Component{
  render(){
    return(
      <div>
        {
          // React.Children.map(this.props.children, (child) => {

          this.props.children.map((child) => {
            return (
              React.cloneElement(child, {className: this.props.theme})
            )
          })
          // this.props.children.map((child) => {
          //   return (<div className={this.props.theme}>
          //             {child}
          //           </div>)
          // })
        }
      </div>
    );
  }
};
