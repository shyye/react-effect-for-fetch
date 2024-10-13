import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState("");
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdviceSlip(data.slip);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  async function handleClickGetMoreAdvice() {
    await getData();
  }

  function handleSaveToFavourites() {
    setFavouriteSlips([
      ...favouriteSlips,
      { id: adviceSlip.id, advice: adviceSlip.advice },
    ]);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          advice={adviceSlip}
          handleClick={handleClickGetMoreAdvice}
          handleClickSave={handleSaveToFavourites}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList
          favourites={favouriteSlips}
        />
      </section>
    </section>
  );
}

export default AdviceSection;
