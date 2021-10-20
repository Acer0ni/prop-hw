
import './App.css';
import weatherData from './weatherData';
import Card from './Card';  

function App() {
  const cards = weatherData.map((card) => <Card img={card.img} condition = {card.condition} time ={card.time} />)
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
        
          {cards}
      </section>
    </div>
  );
}

export default App;
