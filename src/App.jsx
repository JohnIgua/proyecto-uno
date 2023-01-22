import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from "./db/quotes.json"

const arrayColors = ["#6BB9CC", "#6BCCAF", "#FDA763", "#FAF676", "#E0D3F5", "#CAD2C1", "#E6C4A2", "#FFB2AC", "#FFE7AC", "#C2BFB8", "#A7E5CA"];

function App() {
    const getRandom = (arrayElements) => {
        const quantityValues = arrayElements.length;
        const randomIndex = Math.floor(Math.random()*quantityValues);
        return arrayElements[randomIndex];
    };
    const [quote, setQuote] = useState(getRandom(db));

    const [color, setColor] = useState(getRandom(arrayColors));

    const newQuote = () => {
        setQuote(getRandom(db))
        setColor(getRandom(arrayColors))
    }

    console.log(db)
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
        quote={quote} 
        newQuote={newQuote}
        color={color
      }>        
      </QuoteBox>
    </div>
  )
}

export default App
