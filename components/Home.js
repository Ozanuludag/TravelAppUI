import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import activitielearnMoreData from '../assets/data/learnMoreData';
import profile from '../assets/images/person.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import learnMoreData from '../assets/data/learnMoreData';

const Home = ({navigation}) => {
  const {
    container,
    menuWrapper,
    profileImage,
    menuIcon,
    discoverWrapper,
    discoverTitle,
    discoverCategoriesWrapper,
    discoverCategoryText,
    discoverItemWrapper,
    discoverItemImage,
    discoverItemTitle,
    discoverItem,
    discoverItemLocationWrapper,
    discoverItemLocationText,
    activitiesWrapper,
    activitiesTitle,
    activitiesItemsWrapper,
    activitiesItemWrapper,
    activityItemImage,
    activityItemText,
    learnMoreWrapper,
    learnMoreTitle,
    learnMoreItemsWrapper,
    learnMoreItemTitle,
    learnMoreItemImage,
    learnMoreItem,
  } = styles;

  const renderDiscoverItem = ({item}) => {
    return (
      <View style={{margin: 10, borderRadius: 20}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              item: item,
            })
          }>
          <ImageBackground
            source={item.image}
            style={[discoverItem,
              {marginLeft: item.id === 'discover-1' ? 10 : 0},

            ]}
            imageStyle={discoverItemImage}>
            <Text style={discoverItemTitle}>{item.title}</Text>
            <View style={discoverItemLocationWrapper}>
              <IonIcon
                name="location-outline"
                size={32}
                color={colors.white}
                style={menuIcon}
              />
              <Text style={discoverItemLocationText}>{item.location}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  const renderActivityItem = ({item}) => {
    return (
      <View
        style={[
          activitiesItemWrapper,
          {marginLeft: item.id === 'activities-1' ? 20 : 0},
        ]}>
        <TouchableOpacity>
          <Image source={item.image} style={activityItemImage}></Image>
          <Text style={activityItemText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <View style={{margin: 10, borderRadius: 20}}>
        <TouchableOpacity onPress={() => alert(`Learn More ${item.title}`)}>
          <ImageBackground
            source={item.image}
            style={[
              learnMoreItem,
              {marginLeft: item.id === 'learnMore-1' ? 10 : 0},
            ]}
            imageStyle={learnMoreItemImage}>
            <Text style={learnMoreItemTitle}>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={container}>
      <ScrollView>
        {/** Header */}
        <SafeAreaView>
          <View style={menuWrapper}>
            <Icon name="menu" size={32} color={colors.black} style={menuIcon} />
            <Image source={profile} style={profileImage} />
          </View>
        </SafeAreaView>
        {/**discover*/}
        <View style={discoverWrapper}>
          <Text style={discoverTitle}>Discover</Text>
          <View style={discoverCategoriesWrapper}>
            <Text style={[discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={discoverCategoryText}>Destinations</Text>
            <Text style={discoverCategoryText}>Cities</Text>
            <Text style={discoverCategoryText}>Experinces</Text>
          </View>
          <View style={discoverItemWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        {/**Actions */}
        <View style={activitiesWrapper}>
          <Text style={activitiesTitle}>Activities</Text>
          <View style={activitiesItemsWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        {/**Learn more */}
        <View style={learnMoreWrapper}>
          <Text style={learnMoreTitle}>Learn More</Text>
          <View style={learnMoreItemsWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  discoverWrapper: {
    //borderWidth:1,
    //borderColor:'red',
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverCategoryText: {
    color: colors.gray,
    fontSize: 16,
  },
  discoverItemWrapper: {
    paddingVertical: 10,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  discoverItemLocationText: {
    fontSize: 16,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
  activitiesItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemImage: {
    width: 36,
    height: 40,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    //borderWidth:3,
    //borderColor:'red',
    marginVertical: 5,
  },
  learnMoreItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItem: {
    justifyContent: 'flex-end',
    width: 170,
    height: 170,
  },
});
