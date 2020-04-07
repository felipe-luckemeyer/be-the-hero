import React from 'react';
import CurrencyFormat from 'react-currency-format';

const Money = ({placeholder, vlr, setVlr }) => {
  return (
    <div>
     <CurrencyFormat
     value={vlr}
     placeholder={placeholder}
     prefix={"R$"}
     thousandSeparator={"."}
     decimalSeparator={","}
     decimalScale={2}
     fixedDecimalScale={true}
     onChange={(e) => setVlr(e.target.value)}
     />
    </div>
  )
};

export default Money;