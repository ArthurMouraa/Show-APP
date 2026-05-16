
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function NewShow() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>

        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Novo show</Text>

      {/* Upload Banner */}
      <TouchableOpacity style={styles.bannerUpload}>
        <Text style={styles.bannerIcon}>🖼️</Text>

        <Text style={styles.bannerTitle}>
          Foto / banner do show
        </Text>

        <Text style={styles.bannerSubtitle}>
          Toque para selecionar da galeria
        </Text>
      </TouchableOpacity>

      {/* Nome */}
      <Text style={styles.label}>Nome do show</Text>

      <TextInput
        placeholder="Ex: Rock in Rio"
        placeholderTextColor="#6B7280"
        style={styles.input}
      />

      {/* Linha Data/Hora */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Data</Text>

          <TextInput
            placeholder="DD/MM"
            placeholderTextColor="#6B7280"
            style={styles.smallInput}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Horário</Text>

          <TextInput
            placeholder="HH:MM"
            placeholderTextColor="#6B7280"
            style={styles.smallInput}
          />
        </View>
      </View>

      {/* Local */}
      <Text style={styles.label}>Local / cidade</Text>

      <TextInput
        placeholder="Ex: Rio de Janeiro"
        placeholderTextColor="#6B7280"
        style={styles.input}
      />

      {/* Gênero */}
      <Text style={styles.label}>Gênero</Text>

      <View style={styles.genreContainer}>
        <TouchableOpacity style={styles.activeGenre}>
          <Text style={styles.activeGenreText}>
            Rock
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>Pop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>Jazz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>
            Eletrônico
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>
            Sertanejo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genreButton}>
          <Text style={styles.genreText}>Funk</Text>
        </TouchableOpacity>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Salvar show
        </Text>
      </TouchableOpacity>
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

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  backArrow: {
    color: '#94A3B8',
    fontSize: 28,
    marginRight: 8,
  },

  backText: {
    color: '#94A3B8',
    fontSize: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '800',
    marginBottom: 24,
  },

  bannerUpload: {
    height: 140,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#4C1D95',
    borderRadius: 20,
    backgroundColor: '#1A1F37',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  bannerIcon: {
    fontSize: 30,
    marginBottom: 10,
  },

  bannerTitle: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },

  bannerSubtitle: {
    color: '#64748B',
    fontSize: 14,
  },

  label: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  input: {
    height: 55,
    backgroundColor: '#1A1F37',
    borderRadius: 16,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2A3153',
    marginBottom: 18,
  },

  row: {
    flexDirection: 'row',
    gap: 12,
  },

  column: {
    flex: 1,
  },

  smallInput: {
    height: 55,
    backgroundColor: '#1A1F37',
    borderRadius: 16,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2A3153',
    marginBottom: 18,
  },

  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },

  activeGenre: {
    backgroundColor: '#7E22CE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  activeGenreText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  genreButton: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  genreText: {
    color: '#94A3B8',
    fontWeight: '500',
  },

  button: {
    height: 58,
    backgroundColor: '#C026D3',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});