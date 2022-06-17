import { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapMenu from '../../components/MapMenu';
import MenuIcons from '../../components/MenuIcons';
import styles from './styles';
import AlertModal from '../../components/AlertModal';
import LocalDetails from '../../components/LocalDetails';
import Toast from "react-native-toast-message";

import { suspectMarkers, carMarkers, weaponMarkers } from './markers';

import { darkMode } from './mapStyles';

const Home = ({ navigation }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rnPickerSelectIcon, setRNPickerSelectIcon] = useState("Suspect Person");
    const [locationPermission, setLocationPermission] = useState(false);
    const [alertAddedModalVisible, setAlertAddedModalVisible] = useState(false);

    const [region, setRegion] = useState({
        latitude: -25.446293519892595,
        longitude: -49.358515084856016,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    })

    const [reportButtonEnable, setReportButtonEnable] = useState(true);

    // STATES FOR Local Modal

    const [isLocalDetailsVisible, setIsLocalDetailsVisible] = useState(false);
    const [typeLocalDetails, setTypeLocalDetails] = useState("");

    // ---------------------------

    const changeLocalDetailsInfo = (type) => {
        setTypeLocalDetails(type);
        setIsLocalDetailsVisible(true);
    }

    const [chooseOnMapDisabled, setChooseOnMapDisabled] = useState(true);

    const chooseLocationToAddMarker = (coordinates) => {
        const newMarkerObject = {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
        }

        if (typeLocalDetails == "Pessoa suspeita") {
            suspectMarkers.push(newMarkerObject);
        } else if (typeLocalDetails == "Carro suspeito") {
            carMarkers.push(newMarkerObject);
        } else if (typeLocalDetails == "Assalto") {
            weaponMarkers.push(newMarkerObject);
        }

        setChooseOnMapDisabled(true);
        setAlertAddedModalVisible(true);
    }

    return (
        <View style={styles.container}>
            {chooseOnMapDisabled
                ? <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={region => setRegion(region)}
                    loadingEnabled
                    loadingIndicatorColor='#FFFF00'
                    loadingBackgroundColor='#404040'
                    minZoomLevel={0}
                    maxZoomLevel={20}
                    customMapStyle={darkMode}
                >
                    {suspectMarkers.map((item, index) => (
                        <Marker onPress={() => changeLocalDetailsInfo("Pessoa suspeita")} key={index} coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }} icon={require('../../assets/SuspectIcon.png')} />
                    ))}
                    {carMarkers.map((item, index) => (
                        <Marker onPress={() => changeLocalDetailsInfo("Carro suspeito")} key={index} coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }} icon={require('../../assets/CarIcon.png')} />
                    ))}
                    {weaponMarkers.map((item, index) => (
                        <Marker onPress={() => changeLocalDetailsInfo("Assalto")} key={index} coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }} icon={require('../../assets/WeaponIcon.png')} />
                    ))}
                </MapView>
                : <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={region => setRegion(region)}
                    loadingEnabled
                    loadingIndicatorColor='#FFFF00'
                    loadingBackgroundColor='#404040'
                    minZoomLevel={0}
                    maxZoomLevel={20}
                    customMapStyle={darkMode}
                    onPress={(e) => chooseLocationToAddMarker(e.nativeEvent.coordinate)}
                >
                </MapView>
            }
            {isLocalDetailsVisible && <LocalDetails setIsLocalDetailsVisible={setIsLocalDetailsVisible} typeLocalDetails={typeLocalDetails} />}
            {reportButtonEnable
                ? <MapMenu navigation={navigation} setReportButtonEnable={setReportButtonEnable} />
                : <MenuIcons navigation={navigation} setReportButtonEnable={setReportButtonEnable} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setTypeLocalDetails={setTypeLocalDetails} />
            }
            <AlertModal alertAddedModalVisible={alertAddedModalVisible} setAlertAddedModalVisible={setAlertAddedModalVisible} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} rnPickerSelectIcon={rnPickerSelectIcon} setRNPickerSelectIcon={setRNPickerSelectIcon} setChooseOnMapDisabled={setChooseOnMapDisabled} />
        </View>
    )
}

export default Home;