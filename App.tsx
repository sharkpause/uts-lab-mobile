import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import InfoCard from './src/components/InfoCard';
import StudentDirectoryScreen from './src/screens/StudentDirectoryScreen';

type TabKey = 'soal1' | 'soal2';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'soal1', label: 'Soal 1' },
  { key: 'soal2', label: 'Soal 2' },
];

function MainScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>('soal1');
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container,
    ]}>

      <StatusBar style="dark" />

      {activeTab === 'soal1' ? (
        <View style={styles.soalSatu}>
          <InfoCard
            title="Tugas Mobile Programming"
            status="Selesai"
            onPress={() => Alert.alert('Lihat Detail', 'Tugas Mobile Programming: Selesai')}
          />
          <InfoCard
            title="Projek Ujian Tengah Semester"
            status="Proses"
            onPress={() => Alert.alert('Lihat Detail', 'Projek Ujian Tengah Semester: Sedang proses')}
          />
        </View>
      ) : (
        <StudentDirectoryScreen />
      )}

      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              activeOpacity={0.6}
              style={[
                styles.tabButton,
                isActive && styles.tabButtonActive,
                {
                  paddingBottom: 16 + insets.bottom,
                },
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.tabLabel,
                  isActive && styles.tabLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainScreen />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 48,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 16,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E2E8F0',
    borderTopWidth: 3,
    borderTopColor: '#E2E8F0'
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16
  },
  tabButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B'
  },
  tabLabelActive: {
    color: '#2563EB',
  },
  soalSatu: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
