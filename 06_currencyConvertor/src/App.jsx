// import { useState } from 'react'
// // import { inputBox } from './components'
// import usecurrencyinfo from './hooks/usecurrencyinfo'
// import { InputBox } from "./components";
// import useAllCurrencies from './hooks/useAllCurrencies';


// import './App.css'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvetedAmount] = useState(0)
//   const currencyInfo = usecurrencyinfo(from)
//   const options = Object.keys(currencyInfo || {});
//   const currencyOptions = useAllCurrencies();



//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setAmount(convertedAmount); // ✅ Corrected: previously you were setting convertedAmount into amount
//    setConvetedAmount(amount);
//   }


//   const convert = () => {
//     setConvetedAmount(amount * currencyInfo[to])
//   }


//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();

//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                onCurrencyChange={(currency) => setFrom(currency)}

//                 selectCurrency={from}
//                 onAmountchange={(amount)=>{
//                   setAmount(amount)
//                 }}

//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="to"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) =>
//                   setTo(currency)
//                 }
//                 selectCurrency={to}
//                 amountDisable

//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );


// }

// export default App


import { useState } from 'react'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import { InputBox } from "./components";
import useAllCurrencies from './hooks/useAllCurrencies';
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvetedAmount] = useState(0)

  const currencyInfo = usecurrencyinfo(from)
  const options = Object.keys(currencyInfo || {})

  // ✅ You imported useAllCurrencies but didn't use it; below line can be removed if you're not using it:
  const currencyOptions = useAllCurrencies(); // <-- not used anywhere

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvetedAmount(amount)
  }

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
    setConvetedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
             
              <InputBox
            
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountchange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
