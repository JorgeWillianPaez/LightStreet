import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        position: "relative",
        backgroundColor: "#1E1D1C",
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
        justifyContent: "space-evenly",
    },
    selectTypeContainer: {
        position: "relative",
        backgroundColor: "#151515",
        borderRadius: 6,
        padding: 4
    },
    selectTypeText: {
        color: "#FFFFFF",
    },
    selectTypeImage: {
        position: "absolute",
        right: 10,
        top: 5,
        width: 50,
        height: 50
    },
    commentTextArea: {
        color: "#FFFFFF",
        backgroundColor: "#151515",
        height: 120,
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
        color: "#151515",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    dateHourContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#FFFFFF"
    },
    dateHourContent: {
        backgroundColor: "#151515",
        height: 70,
        borderRadius: 6,
    },
    dateContent: {
        width: "48%",
    },
    hourContent: {
        width: "48%",
    },
    addImage: {
        width: 50,
        height: 50,
    },
    important: {
        color: "#EBDF2D",
    },
    placeAlertModalContainer: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#1E1D1C",
    },
    chooseOnMapModalCloseText: {
        color: "#A4A5A5",
    },
    chooseOnMapButton: {
        backgroundColor: "#EBDF2D",
        padding: 14,
        borderRadius: 6,
    },
    chooseOnMapButtonText: {
        color: "#1E1D1C",
        textAlign: "center",
        fontWeight: "bold",
    },
})

export default styles;