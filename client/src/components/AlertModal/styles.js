import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        position: "relative",
        backgroundColor: "#3A3A3A",
        borderRadius: 18,
        display: "flex",
    },
    modalHeaderContainer: {
        position: "absolute",
        top: 0,
        width: "100%",
    },
    header: {
        backgroundColor: "#151515",
        color: "#FFFFFF",
        textAlign: "center",
        padding: 14,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        top: 0,
        fontSize: 22,
    },
    closeModalButton: {
        position: "absolute",
        left: "92%",
        backgroundColor: "transparent",
    },
    closeModalButtonText: {
        color: "#A4A5A5",
        fontSize: 22,
        top: 14
    },
    contentContainer: {
        marginTop: 50,
        padding: 20,
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
    },
    selectTypeContainer: {
        backgroundColor: "#151515",
        borderRadius: 6,
    },
    selectTypeText: {
        color: "#FFFFFF"
    },
    commentTextArea: {
        color: "#FFFFFF",
        backgroundColor: "#151515",
        height: 100,
        padding: 10,
        borderRadius: 6,
    },
    label: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 10,
    },
    createModalButton: {
        backgroundColor: "#EBDF2D",
        padding: 14,
        borderRadius: 6,
    },
    createModalButtonText: {
        color: "#000000",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    important: {
        color: "#EBDF2D",
    }
})

export default styles;