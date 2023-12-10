import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const ExploreScreen = () => {
  return (
    <View>
    <View>
      <TextInput placeholder='Search'/>
    </View>
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    }}>
    <View style={style.searchInputContainer}>
      <TextInput placeholder="Search address, city, location" />
    </View>

    <View style={style.sortBtn}>
    </View>
  </View>
  </View>
  )
}
const style = StyleSheet.create({
  searchInputContainer: {
    height: 50,
    // backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  }, sortBtn: {
    // backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default ExploreScreen