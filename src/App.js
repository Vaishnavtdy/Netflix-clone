import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import {action,originals,comedy,anime,kids,trending} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
			<Banner />
			<RowPoster title='Netflix Orginals' url={originals}/>
      
			<RowPoster title='Trending' url={trending} isSmall/>
			<RowPoster title='Action' url={action} isSmall/>
			<RowPoster title='Anime' url={anime} isSmall/>
			<RowPoster title='Kids' url={kids} isSmall/>
      <RowPoster url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
