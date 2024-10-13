function ArtListItem({artist}) {
  return (
    <>
      <div className="frame">
        <img src={'https://boolean-uk-api-server.fly.dev'+artist.imageURL} />
      </div>
      <h3>{artist.title}</h3>
      <p>Artist: {artist.artist}</p>
    </>
  );
}

export default ArtListItem;
