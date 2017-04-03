const React = require('react');

class ThemedDecorations extends React.Component {
	render() {
			const ChildrenWithExtraProp = React.Children.map(this.props.children, child => {
				return React.cloneElement(child, {
					className: this.props.theme
				})
			})

	return(
		<div>
		{ChildrenWithExtraProp}
		</div>	
		)
	}
}

module.exports = ThemedDecorations