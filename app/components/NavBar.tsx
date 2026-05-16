
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function NavBar() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.bottomTab}>

      <TouchableOpacity style={styles.tabButton}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Ionicons
          name="home"
          size={28}
          color="#A855F7"
        />
        <Text style={styles.activeTabIcon}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}
        onPress={() =>
          navigation.navigate('NewShow')
        }
      >
        <MaterialIcons name="create-new-folder" size={28} color="#A855F7" />
        <Text style={styles.tabIcon}>Criar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}
        onPress={() =>
          navigation.navigate('ShowDetails')
        }
      >
        <AntDesign name="area-chart" size={28} color="#A855F7" />
        <Text style={styles.tabIcon}>Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}
        onPress={() =>
          navigation.navigate('Profile')
        }
      >
        <FontAwesome5 name="user-circle" size={28} color="#A855F7" />
        <Text style={styles.tabIcon}>Perfil</Text>
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
    fontSize: 12,
  },
  tabIcon: {
    color: '#64748B',
    fontSize: 12,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
})