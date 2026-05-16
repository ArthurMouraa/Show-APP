import { useNavigation } from "@react-navigation/native";
import { View , Text, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cadastro(){
const navigation = useNavigation<any>();

return (
  <SafeAreaView style={styles.container}>
      
      <TouchableOpacity style={styles.backButton}
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      
      <View style={styles.header}>
        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>
          Preencha seus dados
        </Text>
      </View>

      
      <View style={styles.form}>
        
        <Text style={styles.label}>Nome completo</Text>

        <TextInput
          placeholder="João Silva"
          placeholderTextColor="#6B7280"
          style={styles.input}
        />

       
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          placeholder="joao@email.com"
          placeholderTextColor="#6B7280"
          style={styles.input}
        />

        
        <Text style={styles.label}>Senha</Text>

        <TextInput
          placeholder="••••••••"
          placeholderTextColor="#6B7280"
          secureTextEntry
          style={styles.input}
        />

        
        <Text style={styles.label}>
          Confirmar senha
        </Text>

        <TextInput
          placeholder="••••••••"
          placeholderTextColor="#6B7280"
          secureTextEntry
          style={styles.input}
        />

        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>

        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Já tem conta?
          </Text>

          <TouchableOpacity>
            <Text style={styles.loginLink}>
              {' '}
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070b1e',
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
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

  header: {
    marginBottom: 30,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 8,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 18,
  },

  form: {
    gap: 14,
  },

  label: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '600',
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
  },

  button: {
    height: 56,
    backgroundColor: '#C026D3',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  loginText: {
    color: '#94A3B8',
    fontSize: 16,
  },

  loginLink: {
    color: '#A855F7',
    fontSize: 16,
    fontWeight: '700',
  },
});