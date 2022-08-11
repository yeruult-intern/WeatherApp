import React, { Component, useEffect, useRef, useCallback } from 'react'
import { Text, View, StyleSheet, Image, Animated, Easing, Button } from 'react-native'


export default function WeatherInfo({ currentWeather }) {
    const { main: { temp }, weather: [details], name } = currentWeather
    const { icon, main, description } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    const translation = useRef(
        new Animated.Value(0)
    ).current;

    const handlePressButton = useCallback(() => {
        Animated.timing(translation, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
          }).start();
    })

    return (
        <Animated.View style={styles.WeatherInfo}>
            <Text>{name}</Text>
            <Animated.Image style={{
                width: 100, height: 100, translateX: translation
            }}
                source={{ uri: iconUrl }} />
            <Text>{temp}</Text>
            <Text style={styles.WeatherDescription}>{description}</Text>
            <Text>{main}</Text>
            <Button title="GGG" onPress={handlePressButton} />
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: 'center',
    },
    WeatherDescription: {
        textTransform: 'capitalize'
    },
    WeatherIcon: {
        width: 100,
        height: 100,
    },
})