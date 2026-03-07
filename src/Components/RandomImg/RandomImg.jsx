import React, { useEffect, useState, useContext } from "react";
import "./RandomImg.css";
import { searchContext } from "../../App";

const RandomImg = () => {

  const [count, setCount] = useState(3);
  const [data, setData] = useState([]);

  const { search } = useContext(searchContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      alert("No previous page!");
    } else {
      setCount(count - 1);
    }
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${count}&limit=30`
    );
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [count]);


  const filteredImages = data.filter((ele) =>
    ele.author.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="random-page">

      <div className="btn-container">

        <button className="btn prev" onClick={decrement}>
          ⬅ Prev Page
        </button>

        <button className="btn next" onClick={increment}>
          Next Page ➡
        </button>

      </div>

      <div className="main-container">

        {filteredImages.length === 0 ? (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No images found
          </h2>
        ) : (
          filteredImages.map((ele) => (
            <div className="card" key={ele.id}>

              <img src={ele.download_url} alt={ele.author} />

              <div className="card-content">
                <h3>{ele.author}</h3>
                <p>ID : {ele.id}</p>
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default RandomImg;