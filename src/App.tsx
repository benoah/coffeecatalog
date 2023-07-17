import './App.scss';

import NavigationBar from "./components/navigation/NavigationBar";
import MainHeadline from "./components/mainheadline/MainHeadline";
import SearchBox from "./components/searchform/SearchBox";
import CoffeeList from "./components/coffeelist/CoffeeList";
import MenuBar from "./components/navigation/MenuBar";
// import useFilteredCoffeeItems from "./hooks/useFilteredCoffeeItems";
 import BackgroundEffect from "./components/effects/BackgroundEffect";
import Loader from "./components/effects/Loader";

import useFilteredCoffeeItems from "./hooks/useFilteredCoffeeItems";


function App() {
  const { filteredCoffeeItems, handleSearchChange, searchTerm, loading } =
  useFilteredCoffeeItems();

  return (
    <div className="coffee-catalog">
      <BackgroundEffect />
      <NavigationBar />
      <MainHeadline />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <div className="grid-container">
        {loading ? (
          <Loader />
        ) : (
          filteredCoffeeItems.map((item) => (
            <CoffeeList key={item.id} item={item} />
          ))
        )}
      </div>
      <MenuBar />
    </div>
  );
}

export default App;
