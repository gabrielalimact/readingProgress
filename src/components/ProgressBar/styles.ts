import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
  container: {
    width: 200,
    height: 30,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    color: 'darkblue',
    marginRight: 7,
  },
  progress: {
    flex: 1,
    borderRadius: 5,
    height: 2,
    backgroundColor: 'white',
  },
  progressFill: {
    borderRadius: 5,
    height: 2,
    backgroundColor: 'darkblue',
  }
})