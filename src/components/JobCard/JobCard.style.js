import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#7ACD2E',
    backgroundColor: '#FF7D61',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  company: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  locations: {
    backgroundColor: 'white',
    color: '#D9B600',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    borderRadius: 50,
    padding: 10,
    fontSize: 20,
    shadowColor: '#D9B600',
    shadowOffset: 5,
    shadowRadius: 20,
  },
  levels: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 18,
    marginRight: 10,
    marginBottom: 10,
  },
  button: {
    marginVertical: 30,
  },
});
