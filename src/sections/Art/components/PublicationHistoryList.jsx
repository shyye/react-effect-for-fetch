function PublicationHistoryList({ history }) {
  return (
    <>
      <h4>Publication History:</h4>
      <ul>
        {history.map( (item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default PublicationHistoryList;
