import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const MostrarCep = ({ item, fn }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>CEP:</Text>
        <Text style={styles.info}>{item.cep}</Text>

        <Text style={styles.label}>Logradouro:</Text>
        <Text style={styles.info}>{item.logradouro}</Text>

        <Text style={styles.label}>Bairro:</Text>
        <Text style={styles.info}>{item.bairro}</Text>

        <Text style={styles.label}>Localidade:</Text>
        <Text style={styles.info}>{item.localidade}</Text>

        <Text style={styles.label}>Estado:</Text>
        <Text style={styles.info}>{item.uf}</Text>

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.botao} onPress={fn}>
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#104245",
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
});

export default MostrarCep;
