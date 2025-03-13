import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PaperProvider } from "react-native-paper";
import HomeHeaderMenu from "@/components/HomeHeaderMenu";
export default function TabLayout() {
  const userLogged = {
    name: "Gabryell Leal Rocha",
    email: "gabryell@unifacisa.com.br",
  };
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Travan",
            headerTitleStyle: {
              color: "#000",
              fontWeight: "bold",
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: "#fb1",
            },
            headerTitle: "Home",
            headerRight: () => {
              return <HomeHeaderMenu userInfo={userLogged} />;
            },
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
            tabBarInactiveTintColor: "#fb1",
            tabBarActiveTintColor: "green",
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerTitleStyle: {
              color: "#000",
              fontWeight: "bold",
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: "#fb1",
            },
            headerTitle: "Cart",
            headerRight: () => {
              return <HomeHeaderMenu userInfo={userLogged} />;
            },
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
            tabBarInactiveTintColor: "#fb1",
            tabBarActiveTintColor: "green",
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
