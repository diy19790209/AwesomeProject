/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var UItest = require('./UItest');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'featured'}
                    icon={{uri:'featured'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}
                >
                  <Featured />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'search'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}
                >
                  <Search />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'uitest'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'uitest'
                        });
                    }}
                >
                  <UItest />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}


/*
var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          國鳳的第一支 React Native App
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
