import { useEffect, useState } from "react";

const fetchColors = () => Promise.resolve(["red", "green", "blue"]);

const LoadedColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColors().then((c) => setColors(c));
  }, []);

  const renderedColors = colors.map((c) => <li key={c}>{c}</li>);
  return <ul>{renderedColors}</ul>;
};

export default LoadedColorList;
