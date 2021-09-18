import React from 'react';
import {Surface} from 'react-native-paper';
import {Image, StyleSheet, View, Text} from 'react-native';
import folder from '../../assets/images/folder.png';
import {font} from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';

const ListComponent = (props) => {
  console.log('props of list +++--->', props);
  return (
    <TouchableHighlight
      underlayColor="#ffffff00"
      onLongPress={() => props.onCardLongPress && props.onCardLongPress(props.item)}
      onPress={() =>
        props.activeTab && props.onCardPress && props.onCardPress({...props,...props.item})
      }>
      <Surface style={styles.surface}>
        <View style={styles.Contain}>
          <View style={styles.imageContain}>
            <Image style={styles.folderImage} source={folder} />
          </View>
          <View style={styles.projectTextContain}>
            <Text style={styles.projectText}>
              {`${props.item.project_name.toUpperCase()} PROJECT` ||
                'DEMO PROJECT'}
            </Text>
          </View>
          <View style={styles.iconContain}>
            <Icon name="angle-right" size={30} color="#bfbfbf" />
          </View>
        </View>
      </Surface>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: '100%',
    elevation: 4,
    borderRadius: 20,
    marginBottom: 20,
  },
  Contain: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContain: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderImage: {
    height: 50,
    width: 50,
  },
  projectTextContain: {
    flex: 0.6,
  },
  projectText: {
    fontFamily: font.bold,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 20,
  },
  iconContain: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListComponent;
