#currency convertor app using API 
import https from 'https';
import  readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apikey = 'API_KEY_FROM_ENV'
const url = `https://v6.exchangerate-api.com/v6/79e25afb74229d1d8e301e93/latest/USD`

const convertCurrency = (amount,rate)=>{
    return (amount*rate).toFixed(3);
}

https.get(url,(response)=>{
    let data ="";
    response.on('data',(chunk)=>{
      data += chunk;
    })
    response.on('end',()=>{
        const rates = JSON.parse(data).conversion_rates;
          

        rl.question('enter the amount in USD:',(amount)=>{
            rl.question('enter the target:',(currency)=>{
                const rate = rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is appoximately ${convertCurrency(amount,rate)} ${currency}`)
                }else{
                    console.log("invalid currency")
                }
              rl.close()  
            })
        })
    })
})
