import { useState } from 'react';
//hooks & components
import { useFetch } from './hooks/useFetch'
import ImageList from './components/ImageList'

//styles & images
import './App.css';
import Planet from './assets/planets.svg'
import Earth from './assets/neptune.gif'


function App() {
  const [inputValue, setValue] = useState("reactjs");
  const [date, setDate] = useState('2022-01-21');
  let {data, error, isPending} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=M1aTXkZ9csLWxO7dfYmXvheSD8v9fIYs5ZtZYqX7&start_date=${date}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(inputValue);
  }

  return (
    <div className="App">
      <header>
        <div className="logo"><h1>NASA</h1></div>
        <div className="spaceship"><img src={Planet} alt="planet" /></div>
      </header>
      <section className="date-picker">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Choose a start date</p>
            <span>Start Date</span>
            <input
            type="date" 
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            />
          </label>
          <button>Submit</button>
        </form>
      </section>
      <section className='apod-img'>
        {data && <p>A simple web app that shows you NASA satellite images from a specified data and persists the changes you make.</p>}
        {error && <p className='error'>{error}</p>}
        {isPending && <img className='loader' src={Earth} alt="planet" />}
        {data && data.map(data => (
          <ImageList key={data.title} image={data} />
        ))}
      </section>
    </div>
  );
}

export default App;
