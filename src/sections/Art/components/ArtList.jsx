import ArtListItem from "./ArtListItem";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtList({ artists }) {
  return (
    <ul className="art-list">
      {artists.map((artist) => (
        <li key={artist.id}>
            <ArtListItem artist={artist}/>
            <PublicationHistoryList history={artist.publicationHistory}/>
        </li>
      ))}
    </ul>
  );
}

export default ArtList;
