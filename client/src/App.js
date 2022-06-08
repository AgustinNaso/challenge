import './App.css';
import { SelectContainer, SelectorsContainer } from './App.style';
import NavBar from './components/NavBar';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'

function App() {

  const [update, setUpdate] = useState(false);
  const chartComponent = useRef(null)
  const productSelect = useRef(null)
  const brandSelect = useRef(null)
  const [categories, setCategories] = useState();
  const [chosenCategory, setChosenCategory] = useState();
  const [products, setProducts] = useState();
  const [chosenProduct, setChosenProduct] = useState();
  const [brands, setBrands] = useState();
  const [chosenBrand, setChosenBrand] = useState();


  const getCategories = async () => {
    await axios.get("http://localhost:8080/categories")
      .then(response => {
        setCategories(response.data)
        console.log(response.data)
      });
  }

  const getProducts = async (category) => {
    await axios.get("http://localhost:8080/products", { params: { category: category } })
      .then(response => {
        setProducts(response.data)
        console.log(response.data)
      });
  }

  const getBrands = async (product) => {
    await axios.get("http://localhost:8080/brands", { params: { product: product } })
      .then(response => {
        setBrands(response.data)
        console.log(response.data)
      });
  }

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    if (categories){
      let category = chosenCategory ? chosenCategory : categories[0]
      getProducts(category);
    }
  }, [categories, chosenCategory])

  useEffect(()=> {
    if(products){
      setChosenProduct(products[0])
      productSelect.current.value = products[0];
      }
  }, [products])

  useEffect(() => {
    if (products) {
      let product = chosenProduct ? chosenProduct : products[0]
      getBrands(product);
    }
  }, [products, chosenProduct])

  useEffect(()=>{
    if(brands){
      setChosenBrand(brands[0])
      brandSelect.current.value = brands[0]
    }
  }, [brands])

  const updateData = async () => {
    let params = {
      category : chosenCategory,
      product : chosenProduct,
      brand : chosenBrand,
    }
    axios.get("http://localhost:8080/sells", { params : params})
      .then(res => {
        console.log(params);
        chartComponent.current.chart.update({ series: { data:res.data } })
      })
  }

  useEffect( () => {
    updateData();
  }, [chosenBrand])

  let options = {
    title: {
      text: 'Sales By Month for:'
    },
    subtitle: {
      text: 'Months',
      verticalAlign: 'bottom'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April']
    },
    yAxis: {
      title: {
        text: "Ventas"
      }
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
          <p style={{ marginRight: '5px' }}>Categoria: </p>
          <select name="category-select" onChange={(e) => setChosenCategory(e.target.value)}>
            {categories && categories.map((element, index) => {
              return (<option value={element}>{element}</option>)
            })
            }
          </select>
        </SelectContainer>
        <SelectContainer>
          <p style={{ marginRight: '5px' }}>Producto: </p>
          <select name="product-select" ref={productSelect} onChange={ (e) => setChosenProduct(e.target.value)}>
            {products && products.map((element, index) => {
              return (<option value={element}>{element}</option>)
            })
            }
          </select>
        </SelectContainer>
        <SelectContainer>
          <p style={{ marginRight: '5px' }}>Marca: </p>
          <select name="brand-select" ref={brandSelect} onChange={(e) => setChosenBrand(e.target.value)}>
            {brands && brands.map((element, index) => {
              return (<option value={element}>{element}</option>)
            })
            }
          </select>
        </SelectContainer>
      </SelectorsContainer>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponent} />
      <div style={{ marginLeft: '48%', display: 'flex', alignItems: 'center' }}>
        <div style={{ borderRadius: '50%', width: '12px', height: '12px', backgroundColor: '#88b3e7' }} />
        <span style={{ margin: '0 0 4px 10px' }}>Ventas</span>
      </div>
    </div>
  );
}

export default App;
