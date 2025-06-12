


This is a simple command-line currency converter built using Node.js. It uses the `https` module to fetch real-time exchange rates from the ExchangeRate-API and allows the user to convert an amount from USD to a target currency. The app prompts the user to enter an amount in USD and the currency code they wish to convert to (e.g., INR, EUR, JPY), then calculates and displays the converted value using live rates. The interface is handled using Node's `readline` module for user input and `chalk` can optionally be used for colorful console output. It demonstrates working with APIs, parsing JSON, handling asynchronous data, and building an interactive CLI tool with minimal dependencies. Make sure to replace the API key with your own, ideally using an environment variable for security.
