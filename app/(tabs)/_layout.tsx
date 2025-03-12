import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import HomeHeaderMenu from '@/components/HomeHeaderMenu';
export default function TabLayout() {

  const colorScheme = useColorScheme();

  const userLogged = { name: "Gabryell Leal Rocha", email: "gabryell@unifacisa.com.br" }
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerTitleStyle: {
              color: '#0EDFBD',
              fontWeight: 'bold',
              fontSize: 24
            },
            headerStyle: {
              backgroundColor: "#0EDFBD"
            },
            headerRight: () => {
              return (
                <HomeHeaderMenu userInfo={userLogged} />
              )
            },
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'green',
          }}
        />
        {/* < Tabs.Screen
          name="cart"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        /> */}
      </Tabs >
    </PaperProvider>
  );
}
