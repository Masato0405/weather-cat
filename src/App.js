import { useState } from 'react';

function App() {

  const [catImageUrl, setCatImageUrl] = useState("");

  const fetchCatInfo = async () => {
    await fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => setCatImageUrl(data[0].url))
  }

  return (
    <div>
      <button type="button" onClick={fetchCatInfo}>Click!</button>
      <img src={catImageUrl ?? ""} />
    </div>
  );
}

export default App;
