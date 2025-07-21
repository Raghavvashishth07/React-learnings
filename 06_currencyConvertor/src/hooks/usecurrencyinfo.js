import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    


      .then((res) => res.json()) // ✅ Fix 1: Call the json() function
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data)

  return data;
}

export default useCurrencyInfo;

