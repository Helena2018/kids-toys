import './categories.style.scss'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Cars',
    },
    {
      id: 2,
      title: 'Dolls',
    },
    {
      id: 3,
      title: 'Aeroplanes',
    },
    {
      id: 4,
      title: 'Learning',
    },
    {
      id: 5,
      title: 'Cartoons',
    }
  ]

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
       </div>
      ))}
     
    </div>
  );
}

export default App;
