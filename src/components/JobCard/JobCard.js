import {Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './JobCard.style';
import Button from '../Button';

const JobCard = ({job, onSelect, onRemove}) => {
  console.log(job + 'job');
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.name}>
          {job.name.length > 25 ? job.name.slice(0, 25) + '...' : job.name}
        </Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <Text style={styles.locations}>{job.locations[0].name}</Text>
        <Text style={styles.levels}>{job.levels[0].name}</Text>
        {onRemove && (
          <Button text="Remove" onPress={onRemove} style={styles.button} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
