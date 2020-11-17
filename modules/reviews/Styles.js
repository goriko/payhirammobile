import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ReviewsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  AvatarContainer: {
    paddingVertical: 10,
  },
  NameContainer: {
    paddingVertical: 10,
  },
  NameTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  RatingTitleContainer: {
    paddingVertical: 25,
  },
  RatingTitleTextStyle: {
    fontSize: 16,
  },
  RatingContainer: {
    flexDirection: 'row',
  },
  StarContainer: {
    paddingHorizontal: 8,
  },
  ExperienceTextContainer: {
    paddingVertical: 10,
  },
  ExperienceTextStyle: {
    fontSize: 16,
  },
  CommentContainer: {
    height: 80,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    width: '80%',
  },
  CommentTextStyle: {},
  ButtonContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: '50%',
  },
  CustomButtonContainer: {
    borderRadius: 10,
  },
  ButtonTextContainer: {
    paddingVertical: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    textAlign: 'center',
  },
});

export default styles;
