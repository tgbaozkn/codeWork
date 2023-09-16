import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: 'white',
    padding: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#7ACD2E',
    marginTop: 20,
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginTop: 10,
  },
  subTitle: {
    color: '#AEC300',
    fontWeight: 'bold',
  },
  subDesc: {
    color: 'gray',
    fontWeight: 'bold',
  },
  detailTitle: {
    color: '#7ACD2E',
    fontWeight: 'bold',
    fontSize: 22,
    paddingVertical: 5,
    textAlign: 'center',
  },
  detailDesc: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#FF6C8B',
    paddingHorizontal: 5,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 50,
  },
});
