import './App.css';
import { SelectContainer, SelectorsContainer } from './App.style';
import NavBar from './components/NavBar';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useRef, useState } from 'react';

function App() {

  const {update, setUpdate} = useState(false);
  const chartComponent = useRef(null)

  const updateData = () => {
      chartComponent.current.chart.update({series : {data: [100, 90, 22, 111]}})
  }

  let options = {
    title: {
        text: 'Sales By Month for:'
    },
    xAxis: {
        categories: ['January', 'February', 'March', 'April']
    },
    series: [{
        type: 'column',
        data: [29.9, 71.5, 106.4, 129.2],
        showInLegend: false
        }]
    }

  return (
    <div className="App">
      <NavBar />
      <SelectorsContainer>
      <SelectContainer>
      <p style={{marginRight: '5px'}}>Categoria: </p>
        <select name="select">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        </SelectContainer>
        <SelectContainer>
        <p style={{marginRight: '5px'}}>Producto: </p>
        <select name="select2">
          <option value="value1">Value 1</option>
          <option value="value2" selected>Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        </SelectContainer>
        <SelectContainer>
        <p style={{marginRight: '5px'}}>Marca: </p>
        <select name="select3" onChange={updateData}>
          <option value="100">Value 1</option>
          <option value="200" selected>Value 2</option>
          <option value="300">Value 3</option>
        </select>
        </SelectContainer>
      </SelectorsContainer>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponent}/>
      <div style={{marginLeft: '50%', display: 'flex', alignItems: 'center'}}>
        <span style={{margin: '0 10px 3px 0'}}>Ventas</span>
        <div style={{borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#88b3e7'}}/>
      </div>
    </div>
  );
}

export default App;
