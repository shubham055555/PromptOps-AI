import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function usePromptLibrary() {

  const [prompts, setPrompts] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadPrompts = async () => {

    try {

      const response = await api.get("/library");

      setPrompts(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadPrompts();

  }, []);

  return {
    prompts,
    loading,
    refresh: loadPrompts,
  };

}