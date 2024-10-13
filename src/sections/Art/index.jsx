import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artists, setArtists] = useState([])

  const getData = async () => {
    const res = await fetch('https://boolean-uk-api-server.fly.dev/art');
    const data = await res.json();
    setArtists(data);
    console.log(artists);
  }

  // Load data
  useEffect(() => {
    getData()
    console.log(artists);
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artists={artists} />
      </div>
    </section>
  )
}

export default ArtsSection
