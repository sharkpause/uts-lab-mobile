import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export type InfoCardProps = {
  title: string;
  status: 'Selesai' | 'Proses';
  onPress: () => void;
};

const InfoCard = ({ title, status, onPress }: InfoCardProps) => {
  const isSelesai = status === 'Selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.badge,
          { backgroundColor: isSelesai ? '#DCFCE7' : '#FFEDD5' },
        ]}
      >
        <Text style={[styles.badgeText, { color: isSelesai ? '#15803D' : '#C2410C' }]}>
          {status}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
    borderRadius: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 12,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    borderRadius: 10,
  },
});

export default InfoCard;
