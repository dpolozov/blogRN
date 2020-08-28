import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { FontAwesome  } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id : item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome name='trash' style={styles.icon} />    
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );

};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <FontAwesome name="plus" style={styles.addIcon} />
        </TouchableOpacity>
      ),
    };
  };

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    addIcon: {
        fontSize: 24,
        color: 'black',
        marginRight: 10
    }
});

export default IndexScreen;