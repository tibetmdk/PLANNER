// Calendar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Calendar({ year, month, size = 40 }) {
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getStartDayIndex = (year, month) => {
    let day = new Date(year, month - 1, 1).getDay(); // 0 (Pazar) - 6 (Cumartesi)
    return day === 0 ? 6 : day - 1; // Pazartesi'yi 0 yap
  };

  const totalDays = getDaysInMonth(year, month);
  const startIndex = getStartDayIndex(year, month);

  const daysArray = Array(startIndex).fill(null).concat(
    Array.from({ length: totalDays }, (_, i) => i + 1)
  );

  const numRows = Math.ceil(daysArray.length / 7);
  const paddedDays = daysArray.concat(Array(numRows * 7 - daysArray.length).fill(null));

  return (
    <View style={[styles.container, { width: size * 7 }]}>
      {paddedDays.map((day, index) => (
        <View
          key={index}
          style={[
            styles.cell,
            {
              width: size,
              height: size,
            },
          ]}
        >
          {day && <Text style={[styles.dayText, { fontSize: size * 0.4 }]}>{day}</Text>}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  dayText: {
    color: '#333',
  },
});