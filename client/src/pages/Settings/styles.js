import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1D1D",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 80,
        marginBottom: 50,
        color: "#FFFFFF",
        textAlign: "center",
    },
    buttonsText: {
        color: "#FFFFFF",
        fontSize: 16,
        width: "70%",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3B3B3B",
        height: 50,
        marginBottom: 20,
        width: "86%",
        padding: 10,
        borderRadius: 6
    },
    buttonContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "50%"
    },
    personIconContainer: {
        backgroundColor: "#C4C4C4",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        padding: 20
    },
    buttonArrowProfileContainer: {
        display: "flex",
    },
    buttonArrowContainer: {
        display: "flex",
        width: "50%"
    },
    buttonArrowImage: {
        alignSelf: "flex-end"
    },
    profileButtonContainer: {
        backgroundColor: "#3B3B3B",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        width: "86%",
        borderRadius: 6,
        padding: 10
    },
    profileButtonContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})

export default styles;