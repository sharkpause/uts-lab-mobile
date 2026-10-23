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
    <View style={[
      styles.card,
      {
        backgroundColor: status == 'Selesai' ? '#9ef2c1' : '#f8e9ae'
      }
      ]}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
          <Text
            style={[
              styles.badgeText,
              isSelesai ? styles.textSelesai : styles.textProses,
            ]}
          >
            {status}
          </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,

    shadowColor: '#000000',
    elevation: 8,

    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 18,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#202C39',
    lineHeight: 22,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '700',
  },
  textSelesai: {
    color: '#00cd56',
  },
  textProses: {
    color: '#d0a600',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: 'row',
    borderRadius: 8,
  },
  buttonText: {
    color: '#F8F5EC',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default InfoCard;