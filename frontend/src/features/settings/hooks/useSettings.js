import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function useSettings() {

  const [settings, setSettings] = useState({});

  const [loading, setLoading] = useState(true);

  const loadSettings = async () => {

    try {

      const response = await api.get("/settings");

      setSettings(response.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  const saveSetting = async (key, value) => {

    try {

      await api.post("/settings", {

        key,

        value,

      });

      setSettings((prev) => ({

        ...prev,

        [key]: value,

      }));

    } catch (err) {

      console.error(err);

      alert("Failed to save setting.");

    }

  };

  useEffect(() => {

    loadSettings();

  }, []);

  return {

    settings,

    loading,

    saveSetting,

  };

}