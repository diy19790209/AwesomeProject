'use strict';

var React = require('react-native');
var PromptExample = require('./PromptExample');

var {
	StyleSheet,
	NavigatorIOS,
	Component
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

class UItest extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'UItest',
					component: PromptExample
				}} />
		);
	}
}

module.exports = UItest;