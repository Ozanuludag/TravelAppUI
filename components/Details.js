import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Details = ({route, navigation}) => {
  const {item} = route.params;
  console.log(JSON.stringify(item));
  const [favorite, setFavorite] = useState(false);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={item.image}
        style={{
          flex: 0.6,
          justifyContent: 'flex-end',
          marginBottom: -20,
          paddingBottom: 30,
          paddingLeft: 10,
        }}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 20,
            top: 10,
            borderRadius:20
          }}>
          <IonIcon name="arrow-back-outline" size={32} color={colors.white} />
        </TouchableOpacity>
        <Text style={{marginBottom: 10, color: colors.white, fontSize: 24}}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <IonIcon name="location-outline" size={32} color={colors.white} />
          <Text style={{fontSize: 16, color: colors.white}}>
            {item.location}
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          flex: 0.4,
          backgroundColor: colors.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingLeft: 15,
          paddingRight: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{
            fontSize: 26,
            fontFamily: 'Lato-Bold',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Description
        </Text>
       <ScrollView showsVerticalScrollIndicator={false}>
       <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
          }}>
          {item.description}
        </Text>
       </ScrollView>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.detailTitle}>Price</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailText}>${item.price}</Text>
              <Text style={styles.detailTextDetail}>/hours</Text>
            </View>
          </View>

          <View>
            <Text style={styles.detailTitle}>Rating</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailText}>${item.rating}</Text>
              <Text style={styles.detailTextDetail}>/person</Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={styles.detailTitle}>Duration</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.detailText}>${item.duration}</Text>
              <Text style={styles.detailTextDetail}>/5</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {
        setFavorite(!favorite);
        alert(!favorite ? "Rehber favorilere eklendi!" : "Rehber favorilerden çıkarıldı!")
      }}
        style={{
          width: 70,
          height: 70,
          backgroundColor: colors.white,
          borderRadius: 100,
          position: 'absolute',
          right: 20,
          bottom: 280,
          elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={favorite ? 'favorite' : 'favorite-outline'} size={32} color={colors.orange} />
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailTitle: {
    marginVertical: 5,
    color: colors.gray,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  detailText: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  detailTextDetail: {
    color: colors.gray,
    fontSize: 13,
    fontFamily: 'Lato-Bold',
  },
  bookBtn: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    marginTop: 30,
    borderRadius: 20,
    marginBottom:15
  },
  bookBtnText: {
    fontSize: 18,
    color: colors.white,
  },
});
