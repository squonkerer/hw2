import './App.css';
import books from './book'

  function App() {
    return (
      <>
      {books.map(function(book) {
        return (
          <div className='container' key={book.id}>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <img src={book.img} alt={book.title}/>
          </div>
        )
      })}
      </>
    );
  };
  
export default App;  
/*function App(props) {
  return(
    <div className='container'>
      <h1>Favorite Books</h1>
      <h2>{books.title}</h2>
      <h3>{books.author}</h3>
      <img>{books.img}</img>
    </div>
  )
}*/


/*import newey from './newey.jpg';
import steiner from './steiner.jpg';
import skunk from './skunk.jpg'

//const App = () => {
const books = [
    {
      title: "Skunk Works: A Personal Memoir of My Years at Lockheed",
      author: "Ben R. Rich, Leo Janos",
      img: skunk
    },
    {
      title: "How To Build A Car",
      author: "Adrian Newey",
      img: newey
    },
    {
      title: "Surviving to Drive",
      author: "Guenther Steiner",
      img: steiner
    }
  ]*/