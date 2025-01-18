# BMI Calculator using LWC
## Overview
This is a Currency Converter App built in Salesforce using Salesforce Lightning Web Components (LWC). The app allows users to convert between different currencies using real-time exchange rates.

## Features
* **User Input:** Allows users to enter the amount and choose the currency code.
* **Currency Conversion:** Users can convert an amount from one currency to another.
* **Real-Time Exchange Rates:** The app fetches real-time exchange rates from a reliable source (`https://exchangerate.host/`).
* **Multi-Currency Support:** Supports a wide range of currencies.
* **Responsive UI:** Optimized for a seamless user experience in Salesforce Lightning environments.
* **LWC (Lightning Web Components):** Utilizes Salesforce LWC framework for modern UI development.

## Usage
1. Enter Amount: Input an amount.
2. Choose From and To currency.
3. Click "Convert": Click the "Convert" button to fetch the converted amount.
4. View Result: The result will display the converted amount.
	
## Code Structure
The project is organized as follows:

* currencyConvert.html: The template file with the UI structure.
* currencyConvert.js: The JavaScript file that handles the BMI calculation logic.
* currencyConvert.css: The CSS file that handles design and layout of the component.
* currencyConvert.js-meta.xml: The metadata configuration file for the component.
* External API: The app integrates with a third-party API for fetching real-time exchange rates (`https://exchangerate.host/`).

