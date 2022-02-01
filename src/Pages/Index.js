import { useState } from "react"
import { Link } from "react-router-dom"




function Index(props) {
  console.log(props.watchlist)
  const [newForm, setNewForm] = useState({
    name: '',
    openPrice:'',
    closePrice:''
})

 // handleChange - will capture new imput as it is typed 
 const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
}
    //handleSubmit will 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createStock(newForm)
        setNewForm({
        name: '',
        openPrice:'',
        closePrice:''
    });
    };
 // loaded function
  const loaded = () => {
    return props.watchlist.map((stockList) => (
      <div key={stockList._id} className="stockList">
        <Link to={`https://api.twelvedata.com/time_series?apikey=98e4fc4de5a349b781441833f5aa7e90&symbol=`+{stockList}+`&interval=1week`}>
          <h1>{stockList.name}</h1>
        </Link>
        <h3 > Stock Symbol : {stockList.name}</h3>
        <h3> Stock Open Price: {stockList.openPrice}</h3>
        <h3> Stock Close Price:{stockList.closePrice}</h3>
        <button type="button"> Add to Portfolio</button>
        <button type="button" onClick={() => props.deleteStock(stockList._id) } > Remove</button>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.openPrice}
          name="openPrice"
          placeholder="Open Price"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.closePrice}
          name="closePrice"
          placeholder="Close Price"
          onChange={handleChange}
        />
        <input type="submit" value="Insert Stock" />
      </form>
      {props.watchlist ? loaded() : loading()}
    </section>
  )
   

}
export default Index
