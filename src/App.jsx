import { useState } from 'react'
import './components/InputBox'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = (()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  })
   
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }



  return (
    <>
      <div
        className=' w-full h-screen flex flex-wrap
        justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        
        >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto rounded-lg p-5 backdop-blur-sm bg-white/30'>
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                convert();
              }}
            >
              <div className='w-full mb-1'>
                <InputBox 
                label = "From" 
                amount={amount}
                CurrencyOptions={options}
                onCurrencyChange={(currency)=> {setFrom(currency)}}
                selectCurrency={from}
                onAmountChange={(amount) => {setAmount(amount)}}
                currencyDisable = {false}
                autofocus
                />
              </div>
              <div className='relative w-full h-7 mb-2'>
                <button
                  type='button'
                  className='absolute left-1/3 translate-x-1/2 translate-y--1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}>
                  swap
                </button>
              </div>
              <div className='w-full mt-1 mb-4'>
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  CurrencyOptions={options}
                  onCurrencyChange={(currency)=>{
                    setTo(currency)
                  }}
                  selectCurrency={to}
                  amountDisable = {false}
                />

              </div>
              <button type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
