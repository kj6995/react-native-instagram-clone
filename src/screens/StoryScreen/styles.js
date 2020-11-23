import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: -500,
    backgroundColor: 'green',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: -700,
  },
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#879416',
  },

  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  textInputContainer: {
    width: 270,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 45,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
