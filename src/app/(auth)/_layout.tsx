import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

/**
 * Renders the layout for the authentication screen.
 * If the user is already logged in, redirects to the home page.
 * Otherwise, displays the authentication stack.
 */
export default function AuthLayout() {
  const { session, loading } = useAuth();

    if(session){
      return <Redirect href={'/'} />
    }

  return <Stack />;
};