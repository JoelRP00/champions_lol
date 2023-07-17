import { useState, useEffect } from "react";
import styles from "./Champions.module.css"
function Champions() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json"
    )
      .then((resp) => resp.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data &&
        Object.keys(data).map((data) => (
          <div key={data}>
            <div className={styles.nomeChampions}>
              <p >{data}</p>
            </div>
            <div >
              <img
                
                className={styles.championImg}
                src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${data}.png`}
                alt="teste"
              />
            </div>
          </div>
        ))}
    </>
  );
}
export default Champions;
