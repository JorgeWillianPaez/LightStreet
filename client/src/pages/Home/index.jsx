import { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Toast from 'react-native-toast-message';
import MapMenu from '../../components/MapMenu';
import styles from './styles';

import { suspectMarkers, carMarkers, weaponMarkers } from './markers';

import { darkMode, standardMode } from './mapStyles';

const Home = () => {

    const [region, setRegion] = useState({
        latitude: -25.446293519892595,
        longitude: -49.358515084856016,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    })

    // const addToMarkers = (e) => {
    //     const coordinates = e.coordinate;

    //     const newMarker = {
    //         latitude: coordinates.latitude,
    //         longitude: coordinates.longitude,
    //     }

    //     Toast.show({
    //         type: 'success',
    //         text1: 'Novo local adicionado!'
    //     })
    // }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
                loadingEnabled
                loadingIndicatorColor='#FFFF00'
                loadingBackgroundColor='#404040'
                minZoomLevel={0}
                maxZoomLevel={20}
                // onPress={e => addToMarkers(e.nativeEvent)}
                customMapStyle={darkMode}
            >
                {suspectMarkers.map((item, index) => (
                    <Marker key={index} coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                    }} icon={require('../../assets/SuspectIcon.png')} />
                ))}
                {carMarkers.map((item, index) => (
                    <Marker key={index} coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                    }} icon={require('../../assets/CarIcon.png')} />
                ))}
                {weaponMarkers.map((item, index) => (
                    <Marker key={index} coordinate={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                    }} icon={require('../../assets/WeaponIcon.png')} />
                ))}
            </MapView>
            <MapMenu />
        </View>
    )
}

export default Home;