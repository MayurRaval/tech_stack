import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation ,UIManager} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{

  constructor(props) {
      super(props);
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

  componentWillUpdate(){
      LayoutAnimation.spring();
  }

  renderDescription(){
    const { library , expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style = {{ flex :1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render(){
      const { titleStyle } = styles;
      const { id, title } = this.props.library;
      return(
        <TouchableWithoutFeedback
          onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection >
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

const mapStateToProps = (state,ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps,actions)(ListItem);

const styles={
  titleStyle:{
    fontSize:18,
    paddingLeft:15,
    color:'black'
  }
}
