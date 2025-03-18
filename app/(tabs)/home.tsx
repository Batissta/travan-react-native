import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

type Viagens = {
  id: number;
  origem: string;
  destino: string;
  image: string;
  valor: string;
};

interface ViagensDisponiveis {
  viagens: Viagens;
}

const TripCard: React.FC<ViagensDisponiveis> = ({ viagens }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Image source={{ uri: viagens.image }} style={styles.image} />

      <Text style={styles.text}>Origem: {viagens.origem}</Text>
      <Text style={styles.text}>Destino: {viagens.destino}</Text>
      <Text style={styles.text}>Valor: {viagens.valor}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push({
            pathname: "/(tabs)/cart",
            params: {
              origem: viagens.origem,
              destino: viagens.destino,
              valor: viagens.valor,
            },
          });
        }}
      >
        <Text style={styles.buttonText}>Agendar Viagem</Text>
      </TouchableOpacity>
    </View>
  );
};

function Home() {
  const viagem1 = {
    id: 1,
    origem: "São Paulo",
    destino: "Rio de Janeiro",
    image:
      "https://www.viajanet.com.br/blog/wp-content/uploads/2018/08/foto-que-fica-embaixo-da-linha-fina.jpg",
    valor: "150,00",
  };

  const viagem2 = {
    id: 2,
    origem: "Lagoa Seca",
    destino: "Campina Grande",
    image:
      "https://www.vaipradisney.com/blog/wp-content/uploads/2018/10/CRUZEIRO-DISNEY-ATLANTIS-NADO-GOLFINHO-BAHAMAS13.jpg",
    valor: "10,00",
  };
  const viagem3 = {
    id: 2,
    origem: "Nova Iorque",
    destino: "Boston",
    image:
      "https://www.vaipradisney.com/blog/wp-content/uploads/2018/10/CRUZEIRO-DISNEY-ATLANTIS-NADO-GOLFINHO-BAHAMAS13.jpg",
    valor: "115,00",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viagens Disponíveis</Text>
      <View style={styles.cardContainer}>
        <TripCard viagens={viagem1} />
        <TripCard viagens={viagem2} />
        <TripCard viagens={viagem3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: 180,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#3a0ca3",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
