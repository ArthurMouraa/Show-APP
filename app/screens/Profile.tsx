import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>
          Meu Perfil
        </Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editIcon}>✏</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.profileCard}>
       
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
            style={styles.avatar}
          />

          <TouchableOpacity
            style={styles.cameraButton}
          >
            <Text style={styles.cameraIcon}>
              📷
            </Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            Nome
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              João Silva
            </Text>
          </View>
        </View>

       
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            E-mail
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              joao@email.com
            </Text>
          </View>
        </View>

        
        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            Senha
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              ••••••••
            </Text>
          </View>
        </View>

        
        <TouchableOpacity
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>
            Salvar alterações
          </Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },

  editButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  editIcon: {
    color: '#A855F7',
    fontSize: 22,
  },

  profileCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 24,
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#7E22CE',
  },

  cameraButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#7E22CE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 95,
  },

  cameraIcon: {
    fontSize: 18,
  },

  infoContainer: {
    marginBottom: 20,
  },

  label: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  infoBox: {
    height: 56,
    backgroundColor: '#1A1F37',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#2A3153',
  },

  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  saveButton: {
    height: 58,
    backgroundColor: '#C026D3',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
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

  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  activeTabIcon: {
    color: '#A855F7',
    fontSize: 28,
  },

  tabIcon: {
    color: '#64748B',
    fontSize: 28,
  },
});