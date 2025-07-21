// src/hooks/useAllCurrencies.js
import { useEffect, useState } from "react";

function useAllCurrencies() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data)));
  }, []);

  return currencies;
}

export default useAllCurrencies;
