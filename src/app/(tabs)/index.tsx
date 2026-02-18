import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import StudentCard from "@/components/StudentCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <ImageBackground
        source={require("../../assets/images/header.jpg")}
        style={styles.header}
        resizeMode="cover"
      >
        <Image
          source={require("../../assets/images/profile.jpg")}
          style={styles.avatar}
        />
      </ImageBackground>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.name}>Aigerim</Text>
        <Text style={styles.course}>React Native Course</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Записаться на курс</Text>
        </TouchableOpacity>

        <StudentCard
          name="Aigerim"
          course="React Native Course"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    height: 220,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },

  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  course: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
