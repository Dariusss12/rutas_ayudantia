import { AuthProvider } from './Src/context/AuthContext';
import AppNavigator from './Src/navigation/AppNavigator';

export default function App() {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

