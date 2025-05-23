import React, { useState } from 'react';
import axios from 'axios';

const dotImg = '/images/dot.png';
const barImg = '/images/bar.png';
const shellImg = '/images/shell.png';

function App() {
  const [number, setNumber] = useState('');
  const [mayan, setMayan] = useState([]);
  const [displayResult, setDisplayResult] = useState(false);
  const [displayCalculation, setDisplayCalculation] = useState(false);
  const [symbols, setSymbols] = useState([]);
  const [exponents, setExponents] = useState(0);
  const [factors, setFactors] = useState([]);
  

  /*
   const symbols = [];
  const dot = 'dot';
  const bar = 'bar';
  const shell = 'shell';

  if (number === 0) return [[shell]];

  while (number > 0) {
    let digit = number % 20;
    const level = [];

    if (digit === 0) {
      level.push(shell);
    } else {
      const bars = Math.floor(digit / 5);
      const dots = digit % 5;
      for (let i = 0; i < bars; i++) level.push(bar);
      for (let i = 0; i < dots; i++) level.push(dot);
    }

    symbols.unshift(level);
    number = Math.floor(number / 20);
  }

  return symbols;
}*/

  const handleSubmit = async (e) => {
    console.log("inside handlesubmit");
    setSymbols([]);
    e.preventDefault();
    setDisplayResult(true);

    const tempSymbols = [];
    const tempFactors = [];

    var input = number;
    //const symbols = [];
  const dot = 'dot';
  const bar = 'bar';
  const shell = 'shell';

  if (input === 0) return [[shell]];

  while (input > 0) 
  {
      let digit = input % 20;
      const level = [];

      if (digit === 0) {
        level.push(shell);
      } else {
        const bars = Math.floor(digit / 5);
        const dots = digit % 5;
        for (let i = 0; i < bars; i++) level.push(bar);
        for (let i = 0; i < dots; i++) level.push(dot);
      }

     
      console.log("level: " + level)
       tempSymbols.unshift(level);
      console.log("temmpSymbols: " + tempSymbols)

      var remainder = input % 20;
      tempFactors.unshift(remainder);
      input = Math.floor(input /20);

    }
  setSymbols(tempSymbols);
  setMayan(tempSymbols);
  setExponents(tempSymbols.length);
  setFactors(tempFactors);
   

    
   /* try {
      const response = await axios.post('/api/convert', {
        number: parseInt(number)
      });
      setResult(true)
      setMayan(response.data.mayan);
    } catch (err) {
      alert('Error converting number');
    }*/
  };

  const renderSymbol = (symbol) => {
    switch (symbol) {
      case 'dot':
        return <img src={dotImg} alt="dot" className="inline w-6 h-6 mx-1 max-w-[100px]" />;
      case 'bar':
        return <img src={barImg} alt="bar" className="inline w-10 h-4 mx-1 max-w-[100px]" />;
      case 'shell':
        return <img src={shellImg} alt="shell" className="inline w-8 h-5 mx-1 max-w-[100px]" />;
      default:
        return <span>{symbol}</span>;
    }
  };

  

return (
    <div className={'flex flex-col items-center justify-center h-screen bg-gray-100 px-4 sm:px-6'}>
      <div className="flex flex-col items-center justify-center mb-4 mt-8">
        <div>
          <h1 className="mb-4">Mayan Number Converter</h1>
        </div>
        <div style={{width: '100%'}}>
          <form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center'        }}>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number"
              className="px-4 py-2 border rounded"
              style={{borderRadius: '6px', border: '1px solid #D1D5DB', padding: '9px 13px', boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', flexGrow: '1', minWidth: '150px', maxWidth: '300px'}}
            />
            <button type="submit" style={{borderRadius: '6px', border: 'none', backgroundColor: '#141413', color: '#FAFAF8',width: '100px', fontSize: '0.875rem' }}>
              Convert
            </button>
          </form>
        </div>
        
        <div className='flex' style={{width: '100%'}}>
          <h3>Result:</h3>
        </div>
        <div className='flex' style={{display: displayResult ? '' : 'none', width: '100%'}}>
          <div className="mt-4 border-2 border-black p-4 rounded" style={{width: '75%'}}>
            {mayan.map((level, index) => (
              <div key={index} style={{ margin: '10px 0', textAlign: 'center',  }}>
                {level.map((symbol, i) => (
                  <span key={i}>{renderSymbol(symbol)}</span>
                ))}
              </div>
            ))}
          </div>
          <div className='border-2 border-black p-4 rounded' style={{width: '25%'}}> 
            Calculation:
            <button onClick={() => setDisplayCalculation(prev => !prev)}>{displayCalculation ? 'hide' : 'show'} </button>
             <div style={{display: displayCalculation ? '' : 'none'}}>
            {factors.map((value, index) => {
  const reverseIndex = factors.length - 1 - index;
  return (
    <p key={index}>
      20 <sup>{reverseIndex}</sup> X {value}
    </p>
  );
})}
            </div>
          </div>
         <h3>Total: {number} </h3>
        </div>
        
       
      </div>
    </div>
  );
}

export default App;