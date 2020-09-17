import React,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({onCountryChange}) => {

  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    const fetchCountriesData = async() => {
      setCountries(await fetchCountries());
    };
    fetchCountriesData();
  }, []);


  return (
      <FormControl className = {styles.formControl}>
        <NativeSelect onChange = {(e) => onCountryChange(e.target.value)}>
          <option value=''>Global</option>
          {countries.map((countries,i) => (<option key={i}>{countries.name}</option>))}
        </NativeSelect>
      </FormControl>
  );
};

export default CountryPicker;
