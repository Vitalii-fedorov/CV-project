import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //http://localhost:8080

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080");
        setData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <></>;
}

export default App;
