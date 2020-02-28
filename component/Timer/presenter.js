import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';
import { bind, storeDispatch } from '../../App';
import * as actions from '../../reducer';
import { bindActionCreators } from 'redux';


class Timer extends Component{
    
    componentWillReceiveProps(nextProps){
    const {addSecond} = bind(actions);
    const currentProps = this.props;
    // console.log(`currentProps are: ${currentProps.isPlaying} and new ones are ${nextProps.isPlaying}`);
    if (
        !currentProps.isPlaying && 
        nextProps.isPlaying){
        // start the interval
        const timerInterval = setInterval(() => {
            console.log("addSecond 액션 생성자 호출");
            currentProps.addSecond()
            // addSecond()
        }, 1000);
        this.setState({
            timerInterval
        });
    } else if (
        currentProps.isPlaying && 
        !nextProps.isPlaying){
        // stop the interval
        clearInterval(this.state.timerInterval);
    }
}

    render(){
        // console.log(this.props);
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{timerDuration-elapsedTime}</Text>
                </View>
                <View style={styles.lower}>
                    { !isPlaying&&<Button iconName="play-circle" onPress={startTimer}/>}
                    { isPlaying&&<Button iconName="stop-circle" onPress={restartTimer}/>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"blue",
    },
    upper: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lower: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100",
    },
})

export default Timer;