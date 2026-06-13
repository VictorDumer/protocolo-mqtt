import { StyleSheet } from "react-native";

const DashboardStyle = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  chartCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  chartTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
});

export default DashboardStyle;
