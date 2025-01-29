import { useEffect, useState } from "react";
import "./style.css"; // Import your CSS file
import axios from "axios";

const Apple = () => {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // Simulate a page loading process (like fetching data)

  const GetData = async () => {
    const response = await axios.get("http://localhost:3400/guest/get-message");
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="apple">
      <h1>Hi Im Admin</h1>
      {data.map((i, index) => {
        return (
          <div key={index} className="data-msg">
            <h1>{i.name}</h1>
            <h2>{i.email}</h2>
            <p>{i.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Apple;
