import React, { useEffect, useState } from "react";

function DjangoApi() {
  const url = "http://127.0.0.1:8000/api/products/?format=json";
  const [data, setData] = useState([]);
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res));
  function handleSearch(e) {
    const value = e.target.value
    console.log(value);
    const filterData = data.filter((get)=>get.value)
    console.log(filterData);
    setData(filterData)
    const have = document.querySelector('.have')
    if(value === data.name){
        have.innerHTML =' bundan bor'
    } else{
        have.innerHTML ='bundan yo`q'
    }
  }
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res));
    console.log('ishladi');
  }, [handleSearch]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container django">
      <h1>salom django</h1>
      <input
        type="search"
        className="card"
        name=""
        id=""
        onChange={handleSearch}
      />
      <div className="have"></div>
      <div className="card--content">
        {data &&
          data.map((item) => {
            return (
              <div className="card">
                <div className="card--img">
                  <img src={item.image} alt={item.name + "image"} />
                </div>
                <h2>Product Name: {item.name}</h2>
                <p className="price">Product Price: {item.price}</p>
                <div className="row">
                  <div className="info">
                    <p>Size: {item.sizes}</p>
                    <p>Discount: {item.discount}</p>
                  </div>
                  <div className="info">
                    <p>
                      Add Date: <a href="#"> {item.add_date}</a>
                    </p>
                    <p>
                      Admin Name: <a href="#"> {item.admin_name}</a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

   
    </div>
  );
}

export default DjangoApi;
