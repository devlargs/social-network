import storage from "constants/storage";
import { useEffect, useState } from "react";

const session = () => {
  const [authorized] = useState(true);
  useEffect(() => {
    if (localStorage.getItem(storage.TOKEN)) {
    }
  }, []);

  return [authorized];
};

export default session;
