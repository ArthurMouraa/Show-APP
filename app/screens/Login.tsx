import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#0c1126',
      // borderRadius: 10
      paddingHorizontal: 28,
      paddingTop: 50,
    }}>

      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoEmoji}>🎭</Text>
        </View>

        <Text style={styles.logoText}>ShowApp</Text>
      </View>


      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo de volta</Text>

        <Text style={styles.subtitle}>
          Faça login para continuar
        </Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        {/* Email */}
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          placeholder="seu@email.com"
          placeholderTextColor="#6B7280"
          style={styles.input}
        />

        {/* Senha */}
        <Text style={styles.label}>Senha</Text>

        <TextInput
          placeholder="••••••••"
          placeholderTextColor="#6B7280"
          secureTextEntry
          style={styles.input}
        />

        {/* Esqueceu senha */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        {/* Botão login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />

          <Text style={styles.dividerText}>ou</Text>

          <View style={styles.divider} />
        </View>

        {/* Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>
            Continuar com Google
          </Text>
        </TouchableOpacity>

        {/* Cadastro */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Não tem conta?
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Register')
            }
          >
            <Text style={styles.registerLink}>
              {' '}
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
    paddingHorizontal: 28,
    paddingTop: 70,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 4
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderColor: 'green',
    // borderWidth: 4
  },

  logoBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#D946EF',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 12,
    // marginBottom: 40,
    gap: 40,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    // borderWidth: 4
  },

  logoEmoji: {
    fontSize: 22,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  header: {
    marginBottom: 20,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    // borderWidth: 4

  },

  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 10,
    lineHeight: 48,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 18,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 9,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    // borderWidth: 4
  },

  label: {
    color: '#CBD5E1',
    fontSize: 16,
    fontWeight: '600',
  },

  input: {
    height: 50,
    backgroundColor: '#1A1F37',
    borderRadius: 16,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2A3153',
  },

  forgotPassword: {
    color: '#A855F7',
    textAlign: 'right',
    fontSize: 15,
    marginTop: 3,
  },

  loginButton: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#C026D3',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 9,
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    // borderWidth: 4
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#26304F',
  },

  dividerText: {
    color: '#64748B',
    marginHorizontal: 12,
    fontSize: 15,
  },

  googleButton: {
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },

  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'red',
    marginTop: 4
  },
  registerText: {
    color: '#94A3B8',
    fontSize: 16,
  },
  registerLink: {
    color: '#A855F7',
    fontSize: 16,
    fontWeight: '700',
  },
});