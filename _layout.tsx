import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [contador, setContador] = useState(0);
  const [display, setDisplay] = useState("");
  const [operacoes, setOperacoes] = useState(0);
  
  const adicionarNumero = (valor) => {
    setDisplay(display + valor);
  };

  const adicionarOperador = (operador) => {
    setDisplay(display + operador);
  };

const Botao = ({ texto, onPress }) => (
  <TouchableOpacity style={styles.botao} onPress={onPress}>
    <Text style={styles.texto}>{texto}</Text>
  </TouchableOpacity>


  const buttons = [
    ["<X", "AC", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ",", "="],
  ];

  return (
  <View style={styles.container}>
    <Text style={styles.display}>{contador}</Text>

    <View style={styles.linha}>
      <Botao texto="1" onPress={() => adicionarNumero('1')} />
      <Botao texto="2" onPress={() => adicionarNumero('2')} />
      <Botao texto="3" onPress={() => adicionarNumero('3')} />
      <Botao texto="+" onPress={() => adicionarOperador('+')} />
    </View>

    <View style={styles.linha}>
      <Botao texto="4" onPress={() => adicionarNumero('4')} />
      <Botao texto="5" onPress={() => adicionarNumero('5')} />
      <Botao texto="6" onPress={() => adicionarNumero('6')} />
      <Botao texto="-" onPress={() => adicionarOperador('-')} />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#ffaaff",
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});