import {Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import {
  FavoritedList,
  removeFavorite,
} from '../../context/FavoritedContext/FavoritedSlice';

const FavoritedJobs = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(st => st.favoritedJobs?.favorited);
  console.log('favoritepage', favorite);

  const handleRemove = id => {
    dispatch(removeFavorite(id));
  };

  const renderFav = ({item}) => (
    <JobCard job={item} onRemove={() => handleRemove(item.id)} />
  );

  return (
    <FlatList
      style={{marginBottom: 40}}
      keyExtractor={item => item.id}
      data={favorite}
      renderItem={renderFav}
    />
  );
};

export default FavoritedJobs;
