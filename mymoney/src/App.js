import React  from "react"
import UseGet from './useGet'
//import axios from "axios";

// this receive an anwers that called of response!!!
/*axios
.get('https://mymoney-dev-prog18-default-rtdb.firebaseio.com/Felipe.json')
.then( res =>{ 
  console.log(res.data)
})*/

/*
axios
.post('https://mymoney-dev-prog18-default-rtdb.firebaseio.com/Felipe.json', {
  outro: 'Martins programer'
})
.then( res =>{
  console.log(res)
})
*/

const Url = 'https://mymoney-dev-prog18-default-rtdb.firebaseio.com/movimentacao/2021-12.json'

function App() {

  // pure function
   const data = UseGet(Url)
   const data2 = UseGet('https://httpbin.org/ip')

  return (
    <div >
      <h1>My money</h1>
      {JSON.stringify(data)}
      
      { data.loading && <p>Loading .....</p>}
      <pre>
      {JSON.stringify(data2)}
      </pre>
    </div>
  );
}

export default App
