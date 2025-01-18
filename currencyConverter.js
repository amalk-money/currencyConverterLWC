import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currenctAssets from '@salesforce/resourceUrl/currencyAssets';

const API_KEY = '';

export default class CurrencyConverter extends LightningElement {
    currencyFrom = "USD"
    currencyTo = "INR"
    amount = ""
    result=""
    countryCode = countryCodeList

    get visible(){
        return this.currencyFrom && this.currencyTo && this.amount && this.result;
    }

    currenctLogo = currenctAssets + '/currencyLogo.png'
    currencyBG = currenctAssets + '/currencyBG.png'

    handleChange(event){
        const {name,value}= event.target;
        this[name] = value  
    }

    submitHandler(event){
        event.preventDefault();
        this.convert();
    }

    async convert(){
        const API_URL = `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${this.currencyFrom}&to=${this.currencyTo}&amount=${this.amount}`
        try{
            const data = await fetch(API_URL)
            const jsonData = await data.json(data)
            console.log('hi');
            console.log(jsonData);
            this.result = Number(jsonData.result).toFixed(2);
        }
        catch(error){
            console.error(error);
        }
    }
}