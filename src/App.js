//hooks & components
import { useFetch } from './hooks/useFetch'
import ImageList from './components/ImageList'

//styles & images
import './App.css';
import Planet from './assets/planets.svg'

function App() {
  const {data, error, isPending} = useFetch('https://api.nasa.gov/planetary/apod?api_key=M1aTXkZ9csLWxO7dfYmXvheSD8v9fIYs5ZtZYqX7&start_date=2022-01-21&end_date=2022-02-21')
  console.log(data)

  return (
    <div className="App">
      <header>
        <div className="logo"><h1>NASA</h1></div>
        <div className="spaceship"><img src={Planet} alt="planet" /></div>
      </header>
      <section className='apod-img'>
        {data && <p>A simple web app that shows you NASA satellite images from a specified data and persists the changes you make.</p>}
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>loading...</p>}
        {data && data.map(data => (
          <ImageList key={data.title} image={data} />
        ))}
      </section>
    </div>
  );
}

export default App;
