import { Href, Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href={'/(auth)/login' as Href} />;
}