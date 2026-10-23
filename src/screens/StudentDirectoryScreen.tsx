import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type Mahasiswa = {
  id: string;
  nama: string;
  prodi: string;
};

const DAFTAR_MAHASISWA: Mahasiswa[] = [
  { id: '1', nama: 'Akira Nishikiyama', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Goro Majima', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Sayama Kaoru', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Kazuma Kiryu', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eri Kamataki', prodi: 'Sistem Informasi' }
];

const StudentDirectoryScreen = () => {
  const [keyword, setKeyword] = useState('');

  const hasilPencarian = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }: { item: Mahasiswa }) => (
    <View style={styles.item}>
      <Text style={styles.itemNama}>{item.nama}</Text>
      <Text style={styles.itemProdi}>{item.prodi}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa"
        placeholderTextColor="#94A3B8"
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={hasilPencarian}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Data tidak ditemukan!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 12,
    color: '#0F172A',
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  itemNama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 2,
  },
  itemProdi: {
    fontSize: 13,
    color: '#64748B',
  },
  emptyText: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 24,
  },
});

export default StudentDirectoryScreen;
