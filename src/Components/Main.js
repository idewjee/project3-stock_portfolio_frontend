import { useEffect, useState } from "react"
import {Route,Switch} from "react-router-dom"
import Index from '../Pages/Index'  //why two dots needed ? 
import Show from '../Pages/Show'


function Main(props) {
    const [watchlist, setWatchList] = useState(null)

    const URL = 'https://stock-portfolio-app-871998.herokuapp.com/watchlist/'

    //get all the stocks 
    const getWatchList = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log ('getWatchList',data)
        setWatchList(data)
    }

    const createStock = async (stockList) => {
        await fetch (URL, {
            method : "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(stockList)  //stringing to data 
        })

        getWatchList()
    }
    //delete 
    const deleteStock = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        })
        getWatchList();
    }


    // run getPeople once when component is mounted 
    useEffect(() =>getWatchList(), []);

    return (
        <main>
            <Switch>
                <Route exact path = "/">
                    <Index watchlist = {watchlist} createStock = {createStock}
                    deleteStock={deleteStock}
                    />
             </Route>
            <Route path="/watchlist/:id" render={(rp) => <Show {...rp}
            

            />}/>

        </Switch>
        </main>
        
    )
  }
  
  export default Main;