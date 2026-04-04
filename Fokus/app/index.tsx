import { Action_Button } from "@/components/Action_Button";
import { Fokus_Button } from "@/components/Fokus_button";
import { Timer } from "@/components/Timer";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./focus.png'),
    display: "Foco"
  },
  {
    id: "short",
    initialValue: 5,
    image: require('./short.png'),
    display: "Pausa curta"
  },
  {
    id: "long",
    initialValue: 15,
    image: require('./long.png'),
    display: "Pausa longa"
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <Action_Button  
            key={p.id}
            active={timerType.id === p.id}
            onPress={() => setTimerType(p)}
            display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={setTimerType.initialValue}/>
        <Fokus_Button />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto ficticio sem fins lucrativos.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    width: "80%",

  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
})