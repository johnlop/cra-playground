import { useState, useEffect } from "react";
import { apiRequest } from "../services/api";

export function useResource({ path }) {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const get = async () => {
      const apiResponse = await apiRequest({ path });
      setResource(apiResponse.data);
    };
    get();
  }, [path]);

  return resource;
}
