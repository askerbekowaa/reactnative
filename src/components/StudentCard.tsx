import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  course: string;
}

export default function StudentCard({ name, course }: Props) {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCourse}>{course}</Text>

      <Text style={styles.likes}>Likes: {likes}</Text>

      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => setLikes(likes + 1)}
      >
        <Text style={styles.likeText}>Like 👍</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 4,
  },

  cardName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardCourse: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 10,
  },

  likes: {
    marginBottom: 10,
  },

  likeButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  likeText: {
    color: "white",
    fontWeight: "bold",
  },
});
