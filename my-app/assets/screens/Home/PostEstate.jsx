import { View, Text, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../../components/Home/style'
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from '../../../src/graphql/mutations'

const PostEstate = () => {

    const [ title, setTitle ] = useState("");
    const [ subtitle, setSubtitle ] = useState("");
    const [ bedroom, setBedroom ] = useState(0);
    const [ image, setImage ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ garage, setGarage ] = useState(0);
    const [ price, setPrice ] = useState(0);
    const [ type, setType ] = useState("");

    const dataCreateEstate = {
        title: title,
        subtitle: subtitle,
        bedroom: bedroom,
        image: image,
        description: description,
        garage: garage,
        price: price,
        type: type
    }

    const createEstate = async () => {
        try {
            await API.graphql(graphqlOperation(mutations.createPost, {input: dataCreateEstate}));
            console.log("Successfully added estate");
        } catch(e) {
            console.log('Error:', e);
        }
    }


  return (
    <View style={styles.PostContainer}>
        <Text style={styles.PostTitle}>Enter details about your house here</Text>
        <View style={styles.InputContainer}>
            <TextInput style={styles.InputText} 
                placeholder="Enter Title" 
                onChangeText={newTitle => setTitle(newTitle)}
                defaultValue={title}
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter Name" 
                onChangeText={newSubtitle => setSubtitle(newSubtitle)}
                defaultValue={subtitle}
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter Number of beds avaliable" 
                onChangeText={newBedroom => setBedroom(Number(newBedroom))}
                defaultValue={bedroom}
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter image"
                onChangeText={newImage => setImage(newImage)}
                defaultValue={image} 
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter description"
                onChangeText={newDescription => setDescription(newDescription)}
                defaultValue={description} 
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter number of car spaces"
                onChangeText={newGarage => setGarage(Number(newGarage))}
                defaultValue={garage}
            />
            <TextInput style={styles.InputText} 
                placeholder="Enter price value"
                onChangeText={newPrice => setPrice(Number(newPrice))}
                defaultValue={price} 
            />
            <TextInput style={styles.InputText} 
                placeholder="What type of house is this"
                onChangeText={newType => setType(newType)}
                defaultValue={type} 
            />
        </View>
        <TouchableOpacity style={styles.PostButton} onPress={() => createEstate()}>
            <Text style={styles.PostButtonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PostEstate