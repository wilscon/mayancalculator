import React, { useState } from 'react';
import dotImg from '/images/dot.png'
import barImg from '/images/bar.png';
import shellImg from '/images/shell.png';



const Converter = () => {
    const [number, setNumber] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [mayan, setMayan] = useState([]);
    const [displayResult, setDisplayResult] = useState(false);
    const [displayCalculation, setDisplayCalculation] = useState(false);
    const [symbols, setSymbols] = useState([]);
    const [exponents, setExponents] = useState(0);
    const [factors, setFactors] = useState([]);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        setNumber(inputValue);
        console.log("inside handlesubmit");
        setSymbols([]);
    
        setDisplayResult(true);
    
        const tempSymbols = [];
        const tempFactors = [];
    
        var input = inputValue;
        //const symbols = [];
      const dot = 'dot';
      const bar = 'bar';
      const shell = 'shell';
    
      if (input === 0) return [[shell]];
    
      while (input > 0) 
      {
          let digit = input % 20;
          const level = [];
          var row = [];
          if (digit === 0) {
            //level.push(shell);
            row.push(shell);
            level.unshift(row);
          } else {
            const bars = Math.floor(digit / 5);
            const dots = digit % 5;
            for (let i = 0; i < bars; i++){
              row.push(bar);
              level.unshift(row);  
              row = [];
            } 
            
            for (let i = 0; i < dots; i++){
              row.push(dot);
            } 
            level.unshift(row);
          }
    
         
          console.log("level " + level)
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
       
    
      
      };
    
      const renderSymbol = (symbol) => {
        console.log("renderSymbol symbol: " + symbol);
        switch (symbol) {
          case 'dot':
            return <img src={dotImg} alt="dot" className="inline w-6 h-6 mx-1 max-w-[100px]" />;
          case 'bar':
            return <img src={barImg} alt="bar" className="inline" style={{width: '100%', height: "75px"}} />;
          case 'shell':
            return <img src={shellImg} alt="shell" className="inline w-8 h-5 mx-1 max-w-[100px]" />;
          default:
            return <span>{symbol}</span>;
        }
      };
return (

    <div className={'flex flex-col items-center flex-grow bg-gray-100 px-4 sm:px-6'}>
        <div className="flex flex-col items-center justify-center mb-4 mt-8">
            <div>
                <h1 className="mb-4">Mayan Number Converter</h1>
            </div>
            <div style={{ width: '100%' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter a number"
                        className="px-4 py-2 border rounded"
                        style={{ borderRadius: '6px', border: '1px solid #D1D5DB', padding: '9px 13px', boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', flexGrow: '1', minWidth: '150px', maxWidth: '300px' }}
                    />
                    <button type="submit" style={{ borderRadius: '6px', border: 'none', backgroundColor: '#141413', color: '#FAFAF8', width: '100px', fontSize: '0.875rem' }}>
                        Convert
                    </button>
                </form>
            </div>
            <div className='' style={{ width: '100%', display: displayResult ? '' : 'none' }}>
                <div className='flex'>
                    <div style={{ width: '75%' }}>
                    <h3 style={{ marginBottom: '0px' }}>Result:</h3>
                </div>
                <div style={{ width: '25%' }}>
                    <h3 style={{ marginBottom: '0px' }}>Calculation:</h3>
                </div>
                </div>
                
                               
                <div className='' style={{ width: '100%' }}>
                    <div className="mt-4 border-2 border-black p-4 rounded" style={{ width: '100%' }}>
                        {mayan.map((level, index) => {
                            const reverseIndex = factors.length - 1 - index;
                            return (
                                <div className='flex'>
                                    <div key={index} style={{ textAlign: 'center', width: '75%', borderTop: '1px solid black' }}>
                                        {level.map((row, i) => (

                                            <div key={i}>
                                                {row.map((symbol, i) => (
                                                    <>{renderSymbol(symbol)}</>
                                                ))}
                                            </div>


                                        ))}
                                    </div>
                                    <div className='flex' style={{ width: '25%', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid black', borderTop: '1px solid black' }}>
                                        <p>20 <sup>{reverseIndex}</sup> x {factors[index]} = {Math.pow(20, reverseIndex) * factors[index]}</p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className='flex' style={{ width: '100%' }}>
                    <div style={{ width: '75%' }}>
                    </div>
                    <div>
                        <h3 style={{ marginLeft: '5px' }}>Total: {number} </h3>
                    </div>

                </div>
            </div>

        </div>

    </div>





);
};

export default Converter;