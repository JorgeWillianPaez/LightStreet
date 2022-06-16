import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#1E1D1C",
        width: "100%",
        top: 30,
    },
    content: {
        padding: 20,
        display: "flex",
        justifyContent: "space-around",
        height: 220,
    },
    closeModalButton: {
        position: "absolute",
        right: 20
    },
    closeModalButtonText: {
        color: "#373635",
        fontSize: 28,
    },
    header: {
        position: "relative",
        width: "100%",
        backgroundColor: "#151515",
        height: 40,
        display: "flex",
    },
    mainInfoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    footer: {
        width: "100%",
        backgroundColor: "#151515",
        height: 60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    regionDetailsButton: {
        backgroundColor: "#EBDF2D",
        width: 160,
        padding: 8,
        borderRadius: 6,
    },
    regionDetailsButtonText: {
        color: "#1E1D1C",
        textAlign: "center",
        fontSize: 14,
    }
})

export default styles;