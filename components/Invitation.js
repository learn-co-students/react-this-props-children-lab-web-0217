import React from 'react'

class Invitation extends React.Component {
	render() {
		const childDiv = React.Children.map(this.props.children, child =>{
			return(<div className="{this.props.theme}">{child}</div>)
		})

		return (
			<div>
				<h1>You've been invited!</h1>
				{this.props.children}
			</div>
		)
	}
}

module.exports = Invitation