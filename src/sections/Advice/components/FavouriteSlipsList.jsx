function FavouriteSlipsList({ favourites }) {
  return (
    <>
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((fav, index) => (
          <li key={index}>{fav.advice}</li>
        ))}
      </ul>
    </>
  );
}

export default FavouriteSlipsList;
