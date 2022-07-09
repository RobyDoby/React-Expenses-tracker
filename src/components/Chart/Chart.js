import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
   const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
   const totalMaximum = Math.max(...dataPointValues);
   const chartBarNumbers = props.dataPoints.length;
   const root = document.documentElement;
   root.style.setProperty('--chartbars-number', chartBarNumbers);

   return (
      <div className="chart">
         {props.dataPoints.map((dataPoint) => (
            <ChartBar
               value={dataPoint.value}
               maxValue={totalMaximum}
               label={dataPoint.label}
               key={dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;
