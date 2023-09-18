import { useState } from "react";

const fruits = [
  { id: "1", item: "Peach" },
  { id: "2", item: "Apple" },
  { id: "3", item: "Banana" },
  { id: "4", item: "Pineapple" },
  { id: "5", item: "Plum" }
];


function App() {

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleSearch = () => {
    setSearch(text)
  }


  const filteredFruits = useMemo (() => fruits.filter((fruit) => {
    console.log('FILTERING!')
    return fruit.item.toLowerCase().includes(search.toLowerCase())
  }), [search])

// const filteredFruits = fruits.filter((fruit) => {
//   return fruit.item.toLowerCase().includes(search.toLocaleLowerCase())
// })


  return (
    <div>
        <h1>Filtering ...</h1>
        <input type="text" value={text} onChange={handleText}/>
        <button type="button" onClick={handleSearch}>Search</button>
        <div>
          {filteredFruits.map((filteredFruit) => (
            <p key={filteredFruit.id}>{filteredFruit.item}</p>
          ))}
          
        </div>
    </div>
  );

}
  

export default App;
