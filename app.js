import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const [invoices, setInvoices] = useState([
    { id: '1', customer: 'موزع السبعين', amount: '500$', status: 'مدفوع' },
    { id: '2', customer: 'محل الذمار', amount: '1200$', status: 'آجل' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>شركة الطاقة للبطاريات</Text>
        <Text style={styles.headerSubtitle}>إدارة فرع مازن القحفة</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>آخر الفواتير والمطابقات</Text>
        <FlatList
          data={invoices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.invoiceCard}>
              <Text style={styles.invoiceText}>{item.customer}</Text>
              <Text style={[styles.invoiceStatus, { color: item.status === 'مدفوع' ? '#27ae60' : '#e67e22' }]}>
                {item.amount} - {item.status}
              </Text>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.buildButton}>
        <Text style={styles.buttonText}>تحديث بيانات المخزن</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7f6' },
  header: { backgroundColor: '#1a2a6c', padding: 30, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  headerSubtitle: { color: '#bdc3c7', fontSize: 14, marginTop: 5 },
  content: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'right' },
  invoiceCard: { 
    backgroundColor: '#fff', padding: 15, borderRadius: 10, 
    flexDirection: 'row-reverse', justifyContent: 'space-between', marginBottom: 10,
    elevation: 2
  },
  invoiceText: { fontSize: 16, color: '#2c3e50' },
  invoiceStatus: { fontWeight: 'bold' },
  buildButton: {
    backgroundColor: '#f39c12', padding: 15, margin: 20, 
    borderRadius: 8, alignItems: 'center', position: 'absolute', bottom: 20, left: 20, right: 20
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
