import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [display, setDisplay] = useState("");

  const adicionarNumero = (valor) => {
    setDisplay((prev) => prev + valor);
  };

  const adicionarOperador = (operador) => {
    setDisplay((prev) => prev + operador);
  };

  const calcular = () => {
    try {
      const partes = display.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);

      if (!partes) return;

      let resultado = parseFloat(partes[0]);

      for (let i = 1; i < partes.length; i += 2) {
        const operador = partes[i];
        const numero = parseFloat(partes[i + 1]);

        if (operador === "+") resultado += numero;
        if (operador === "-") resultado -= numero;
        if (operador === "*") resultado *= numero;
        if (operador === "/") resultado /= numero;
      }

      setDisplay(String(resultado));
    } catch (error) {
      setDisplay("Erro");
    }
  };

  const limpar = () => {
    setDisplay("");
  };

  const Botao = ({ texto, onPress }) => (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
  <View style={styles.container}>
    <Text style={styles.display}>{display || "0"}</Text>

    <View style={styles.linha}>
      <Botao texto="7" onPress={() => adicionarNumero("7")} />
      <Botao texto="8" onPress={() => adicionarNumero("8")} />
      <Botao texto="9" onPress={() => adicionarNumero("9")} />
      <Botao texto="/" onPress={() => adicionarOperador("/")} />
    </View>

    <View style={styles.linha}>
      <Botao texto="4" onPress={() => adicionarNumero("4")} />
      <Botao texto="5" onPress={() => adicionarNumero("5")} />
      <Botao texto="6" onPress={() => adicionarNumero("6")} />
      <Botao texto="*" onPress={() => adicionarOperador("*")} />
    </View>

    <View style={styles.linha}>
      <Botao texto="1" onPress={() => adicionarNumero("1")} />
      <Botao texto="2" onPress={() => adicionarNumero("2")} />
      <Botao texto="3" onPress={() => adicionarNumero("3")} />
      <Botao texto="-" onPress={() => adicionarOperador("-")} />
    </View>

    <View style={styles.linha}>
      <Botao texto="0" onPress={() => adicionarNumero("0")} />
      <Botao texto="AC" onPress={limpar} />
      <Botao texto="=" onPress={calcular} />
      <Botao texto="+" onPress={() => adicionarOperador("+")} />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
    color: "#fff",
  },
  linha: {
    flexDirection: "row",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#1c1c1c", 
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", 
  },
});