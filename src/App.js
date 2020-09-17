import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import covidImage from './images/image.png'

import styles from './App.module.css';

class App extends React.Component{

  state = { data: "", country: ''};

  componentDidMount = async () => {
    const data = await fetchData();
    this.setState({data: data});
  };

  onCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({data: data, country: country});
  }

  render(){
    return (
      <div className = {styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19"/>
        <Cards data={this.state.data} />
        <CountryPicker onCountryChange = {this.onCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
