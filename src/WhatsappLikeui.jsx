import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import image3 from "../images/wallpaperflare.com_wallpaper copy 4.jpg";
import snapedit1 from "../images/wallpaperflare.com_wallpaper copy 8.jpg";
import image1 from "../images/wallpaperflare.com_wallpaper copy 12.jpg";
import snapedit2 from "../images/wallpaperflare.com_wallpaper-3 copy 2.jpg";

const WhatsappLikeui = () => {
  const data = [
    { id: "1", title: "Rohit", image: image3, body: "Okayish but..." },
    { id: "2", title: "Bupesh", image: image1, body: "Khatam h bc" },
    {
      id: "3",
      title: "Gajodhar",
      image: snapedit1,
      body: "Good boy but can be improved",
    },
    { id: "4", title: "Parle", image: snapedit2, body: "Good boy" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>contact list</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.profile}>
          <Image  source={item.image} style={styles.profileimage} />
          <View style={styles.contextholder}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default WhatsappLikeui;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212", // Modern dark background
      padding: 10,
      marginTop: 20,
    },
    headertext: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#e0e0e0", // Softer white for better readability
      textAlign: "center",
      marginBottom: 20,
    },
    profile: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      padding: 10,
      backgroundColor: "#1f1f1f", // Slightly lighter card background
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    profileimage: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    contextholder: {
      flex: 1,
      paddingHorizontal: 5,
    },
    title: {
      fontSize: 20,
      color: "#e0e0e0",
      fontWeight: "bold",
      marginBottom: 5,
    },
    body: {
      fontSize: 15,
      color: "#b0b0b0", // Slightly muted white for the description
    },
  });
  