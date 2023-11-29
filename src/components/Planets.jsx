import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();

      setPlanets(data.results);
      setCount(data.count);
      setLoading(false);
    }

    fetchPlanets();
  }, []);

  const PromptCardList = ({ data }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((planet) => (
          <PromptCard key={planet.name} post={planet} />
        ))}
      </div>
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return planets.filter((item) => regex.test(item.name));
  };

  return (
    <>
      <h1 className="underline">Planets</h1>
      <p>Count: {count}</p>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <section className="feed">
            <form className="relative w-full flex-center">
              <input
                type="text"
                placeholder="Search here..."
                value={searchText}
                onChange={handleSearchChange}
                required
                className="search_input peer"
              />
            </form>
            {searchText ? (
              <PromptCardList data={searchedResults} />
            ) : (
              <PromptCardList data={planets} />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Planets;
