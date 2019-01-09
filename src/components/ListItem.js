import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component{
  render(){
      const { titleStyle } = styles;
      return(
        <CardSection >
          <Text style={titleStyle}>
            {this.props.library.title}
          </Text>
        </CardSection>
      );
  }
}

export default ListItem;

const styles={
  titleStyle:{
    fontSize:18,
    paddingLeft:15,
    color:'black'
  }
}
