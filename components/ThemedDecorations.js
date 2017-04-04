import React from 'react'

class ThemedDecorations extends React.Component {
	render(){
		const childDiv = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
        className: this.props.theme
      })
		})

		return (
			<div>
				{childDiv}
			</div>
		)
	}
}

module.exports = ThemedDecorations