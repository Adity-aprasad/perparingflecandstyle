import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Faltcards from './src/Faltcards';
import ElevatedCards from './src/ElevatedCards';
import WhatsappLikeui from './src/WhatsappLikeui';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cards}>
          <Text style={styles.headingText}>Flat Cards</Text>
          <Faltcards />
        </View>

        <View style={styles.cards}>
          <Text style={styles.headingText}>Elevated Cards</Text>
          <ElevatedCards />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
            }}
            style={styles.image}
          />
          <Text style={styles.imageText}>Image of a Cloud</Text>
        </View>

        <View style={styles.imageContainer2}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            }}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.pressableButton,
                { backgroundColor: pressed ? "#0056b3" : "#007bff" },
              ]}
              onPress={() => console.log("Read More Pressed")}
            >
              <Text style={styles.pressableText}>Read More</Text>
            </Pressable>
            <TouchableOpacity
              style={styles.touchableButton}
              onPress={() => console.log("Follow Button Pressed")}
            >
              <Text style={styles.touchableText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
        <WhatsappLikeui/>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Changed to a darker shade for better contrast
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cards: {
    padding: 15,
    marginVertical: 20,
    backgroundColor: "#1f1f1f", // Subtle contrast to container background
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e0e0e0", // Softer white for text
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  imageText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "500",
    color: "#e0e0e0",
    textAlign: "center",
  },
  imageContainer2: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  pressableButton: {
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pressableText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  touchableButton: {
    margin: 5,
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  touchableText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  headertext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e0e0e0",
    textAlign: "center",
    marginBottom: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#1f1f1f",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  profileimage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  contextholder: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e0e0e0",
  },
  body: {
    fontSize: 14,
    color: "#ccc",
  },
});
