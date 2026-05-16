import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';

export default function ShowDetails() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.showCard}>
        
        <View style={styles.banner}>
          <View style={styles.genreBadge}>
            <Text style={styles.genreText}>Rock</Text>
          </View>

          <View style={styles.bannerPlaceholder}>
            <Text style={styles.bannerText}>
              🖼 Banner do show
            </Text>
          </View>
        </View>

        
        <View style={styles.content}>
          <Text style={styles.title}>
            Rock in Rio 2025
          </Text>

          
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📅</Text>

              <Text style={styles.infoText}>
                15 Set
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🕘</Text>

              <Text style={styles.infoText}>
                19:00
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📍</Text>

              <Text style={styles.infoText}>
                RJ
              </Text>
            </View>
          </View>

          
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
            >
              <Text style={styles.actionText}>
                ✏ Editar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>
                ↗ Compartilhar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
            >
              <Text style={styles.actionText}>
                🗑 Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      
      <Text style={styles.sectionTitle}>
        Outros shows
      </Text>

      
      <TouchableOpacity style={styles.otherCard}>
        <View style={styles.otherIconBox}>
          <Text style={styles.otherIcon}>
            🎵
          </Text>
        </View>

        <View style={styles.otherContent}>
          <Text style={styles.otherTitle}>
            Lollapalooza
          </Text>

          <Text style={styles.otherSubtitle}>
            Pop/Rock • São Paulo
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

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

  showCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 28,
  },

  banner: {
    height: 150,
    backgroundColor: '#4C1D95',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  genreBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#9333EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },

  genreText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },

  bannerPlaceholder: {
    backgroundColor: '#5B21B6',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  bannerText: {
    color: '#E9D5FF',
    fontSize: 14,
  },

  content: {
    padding: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  infoItem: {
    alignItems: 'center',
  },

  infoIcon: {
    fontSize: 18,
    marginBottom: 4,
  },

  infoText: {
    color: '#CBD5E1',
    fontSize: 16,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editButton: {
    backgroundColor: '#7E22CE',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
  },

  actionButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
  },

  actionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  sectionTitle: {
    color: '#CBD5E1',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 18,
  },

  otherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    paddingBottom: 18,
  },

  otherIconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#4C1D95',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  otherIcon: {
    fontSize: 24,
  },

  otherContent: {
    flex: 1,
  },

  otherTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },

  otherSubtitle: {
    color: '#94A3B8',
    fontSize: 16,
  },

  arrow: {
    color: '#64748B',
    fontSize: 28,
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