import { useEffect, useState } from "react";

const api =
  "https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json";

function DataAccess() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return console.log(data);
  }
  return null;
}

export default DataAccess;
