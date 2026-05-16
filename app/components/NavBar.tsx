
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

export default function NavBar(){

  return (
  <View style={styles.bottomTab}>

  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.activeTabIcon}>⌂</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.tabIcon}>⌕</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.tabIcon}>＋</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.tabIcon}>◯</Text>
  </TouchableOpacity>

</View>

  )
}

const styles = StyleSheet.create({
  bottomTab: {
    marginTop: 'auto',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activeTabIcon: {
  color: '#A855F7',
  fontSize: 28,
},
tabIcon: {
  color: '#64748B',
  fontSize: 28,
},
tabButton: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
}
})