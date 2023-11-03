import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import StopWatch from 'react-native-stopwatch-timer';
// import Icon from 'react-native-vector-icons/MaterialIcons';


const StopwatchComponent = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  let stopwatch = null;

  const toggleStopwatch = () => {
    setIsRunning(!isRunning);
    if (stopwatch) {
      stopwatch.toggle();
    }
  };

  const handleLap = () => {
    if (stopwatch) {
      const lapTime = stopwatch.getTimer();
      setLaps([...laps, lapTime]);
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    if (stopwatch) {
      stopwatch.reset();
    }
    setLaps([]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StopWatch
        ref={(stopwatchRef) => (stopwatch = stopwatchRef)}
        msecs
        start={isRunning}
        options={{ fontSize: 40 }}
      />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={toggleStopwatch}
        />
        <Button title="Lap" onPress={handleLap} />
        <Button title="Reset" onPress={resetStopwatch} />
      </View>
      <Text>Laps/Splits:</Text>
      {laps.map((lap, index) => (
        <Text key={index}>{`Split ${index + 1}: ${lap}`}</Text>
      ))}
    </View>
  );
};

export default StopwatchComponent;
