
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Meus Shows
        </Text>

        <TouchableOpacity 
          onPress={() =>
              navigation.navigate('NewShow')
          }        
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Busca */}
      <TextInput
        placeholder="Buscar show..."
        placeholderTextColor="#6B7280"
        style={styles.searchInput}
      />

      {/* Lista */}
      <View style={styles.list}>
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🎤</Text>
          </View>
          
          <View style={styles.cardContent}>
            <TouchableOpacity
            onPress={() =>
              navigation.navigate('ShowDetails')
            }
          >
            <Text style={styles.cardTitle}>
              Rock in Rio 2025
            </Text>
          </TouchableOpacity>

            <Text style={styles.cardSubtitle}>
              Rock • 15 Set • Rio de Janeiro
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🎵</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Lollapalooza Brasil
            </Text>

            <Text style={styles.cardSubtitle}>
              Pop/Rock • 22 Mar • São Paulo
            </Text>
          </View>
        </View>

      </View>
      <NavBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },

  plus: {
    color: '#A855F7',
    fontSize: 36,
  },

  searchInput: {
    height: 55,
    backgroundColor: '#1A1F37',
    borderRadius: 16,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2A3153',
    marginBottom: 28,
  },

  list: {
    gap: 18,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    paddingBottom: 18,
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#4C1D95',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  icon: {
    fontSize: 24,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },

  cardSubtitle: {
    color: '#94A3B8',
    fontSize: 16,
  },

  bottomTab: {
    marginTop: 'auto',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabIcon: {
    color: '#94A3B8',
    fontSize: 28,
  },
});