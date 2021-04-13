import React , {useState} from 'react'
import './style.css'

function App() {

  const carsCollection = {
    Renault: [
      { name: "Duster", rating: "4/5" },
      { name: "Fluence", rating: "3.5/5" }
    ],
    Hyundai : [
      { name: "Verna", rating: "4.8/5" },
      { name: "Flantra", rating: "3.8/5" }
    ],
    Honda: [
      { name: "Honda City", rating: "4.5/5" },
      { name: "Honda Civic", rating: "4/5" }
    ]
  };


  var cars = Object.keys(carsCollection);

  function handlebtnClick(type) {
    setCarsToShow(type);
  }

  const [carstoShow, setCarsToShow] = useState("Renault");
  return (
    <div className="App">
     <h1>Best Cars</h1>
        <p>Check cars rating </p>
        {cars.map((e)=>(
          <button className="button" onClick={() => handlebtnClick(e)}>
          {e}
        </button>
        ))}

<ul style={{ listStyle: "none" }}>
          {carsCollection[carstoShow].map((car) => (
            <li>
              <div className="list-div">
                {car.name}
                <div style={{ fontSize: "smaller" }}>{car.rating}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
