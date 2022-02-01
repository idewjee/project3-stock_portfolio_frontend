import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <nav classnmae = "nav" > 
        
            <Link to='/'>
                <div> Watchlist Page </div>
            </Link>

        
        </nav>
    )
  }
  
  export default Header