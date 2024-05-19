import React from 'react'
import { useId } from 'react';
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    autofocus = false,
    className = "",

}) {
  const amountInputId = useId() 
  return (
    <div className={`bg-green-200 border border-black p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label 
                htmlFor={amountInputId}
                className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            <input 
                id = {amountInputId}
                className='outline-none w-full bg-transparent border border-black/15 py-1.5' 
                type='number'
                placeholder='Amount'
                disabled = {currencyDisable || amountDisable}  
                value={amount}
                autoFocus = {autofocus}
                onChange={(e) => onAmountChange  && onAmountChange(Number(e.target.value) || null)}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right border'>
            <p className='text-black/40 mb-2 w-full '>Currency Type</p>
            <select 
                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled = {currencyDisable}
                >
                {CurrencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}  

            </select>
        </div>
    </div>
  );
}

export default InputBox;