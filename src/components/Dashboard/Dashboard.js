import { View, Text } from "react-native";
import { CurveType, LineChart, PieChart } from "react-native-gifted-charts";
import DashboardStyle from "./DashboardStyle";

export default function Dashboard({ data }) {
  const tempFiltered = data.filter(item => item.type === 'temperatura')
  const tempChart = tempFiltered.map(item => ({ value: item.value }))

  const umidFiltered = data.filter(item => item.type === 'umidade')
  const umidChart = umidFiltered.map(item => ({ value: item.value }))

  return (
    <View style={DashboardStyle.container}>
      {tempChart.length > 0 && (
        <View style={DashboardStyle.chartCard}>
          <Text style={DashboardStyle.chartTitle}>Temperatura</Text>
          <LineChart
            curveType={CurveType.CUBIC}
            curved={true}
            data={tempChart}
            color="#E74C3C"
            dataPointsColor="#E74C3C"
            width={200}
            height={200}
            thickness={2}
            dataPointsRadius={3}
            showVerticalLines
            verticalLinesColor="#333"
            verticalLinesStrokeDashArray={[2, 10]}
            yAxisTextStyle={{ color: '#fff' }}
            xAxisLabelTextStyle={{ color: '#fff' }}
            animateOnDataChange={true}
            noOfSections={5}
            formatYLabel={label => String(Math.round(label))}
            yAxisLabelSuffix="°C"
            rulesColor="#333"
            rulesStrokeDashArray={[2, 10]}
          />
        </View>
      )}

      {umidChart.length > 0 && (
        <View style={DashboardStyle.chartCard}>
          <Text style={DashboardStyle.chartTitle}>Umidade</Text>
          <LineChart
            curveType={CurveType.CUBIC}
            curved={true}
            data={umidChart}
            color="#3498DB"
            dataPointsColor="#3498DB"
            width={260}
            height={200}
            thickness={2}
            dataPointsRadius={3}
            showVerticalLines
            verticalLinesColor="#333"
            verticalLinesStrokeDashArray={[2, 10]}
            yAxisTextStyle={{ color: '#fff' }}
            xAxisLabelTextStyle={{ color: '#fff' }}
            animateOnDataChange={true}
            noOfSections={5}
            formatYLabel={label => String(Math.round(label))}
            yAxisLabelSuffix="%"
            rulesColor="#333"
            rulesStrokeDashArray={[2, 10]}
          />
        </View>
      )}

    </View>
  )
}
