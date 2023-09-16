import {Text, View, ScrollView, useWindowDimensions, Alert} from 'react-native';
import React from 'react';
import useJobs from '../../hooks/useJobs/useJobs';

import {useDispatch, useSelector} from 'react-redux';
import RenderHTML from 'react-native-render-html';
import styles from './Detail.style';
import Button from '../../components/Button';
import {addFavorite} from '../../context/FavoritedContext/FavoritedSlice';

const Detail = ({route}) => {
  const {id} = route.params;
  const apiUrl = 'https://www.themuse.com/api/public/jobs';
  const dispatch = useDispatch();
  const favorite = useSelector(st => st.favoritedJobs.favorited);
  const {width} = useWindowDimensions();
  const {data, loading, error} = useJobs(`${apiUrl}/${id}`);
  console.log('favorite', favorite);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleAddFavorite = () => {
    if (favorite?.find(item => item.id === id)) {
      Alert.alert('Warning', 'This job has already added the favorities');
    } else {
      dispatch(addFavorite(data));
      Alert.alert('Successfuly', 'Job is added the favorities');
    }
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Locations: </Text>
          <Text style={styles.subDesc}>{data.locations[0].name}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Job Level: </Text>
          <Text style={styles.subDesc}>{data.levels[0].name}</Text>
        </View>
        <Text style={styles.detailTitle}>Job Detail</Text>
      </View>
      <View style={styles.detailDesc}>
        <RenderHTML contentWidth={width} source={{html: data.contents}} />
      </View>
      <View style={styles.footer}>
        <Button text="Submit" onPress={() => {}} />
        <Button text="Favorite" onPress={handleAddFavorite} />
      </View>
    </ScrollView>
  );
};

export default Detail;
