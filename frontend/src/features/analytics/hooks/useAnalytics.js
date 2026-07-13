import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function useAnalytics() {

  const [analytics, setAnalytics] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadAnalytics = async () => {

    try {

      const response = await api.get("/analytics");

      setAnalytics(response.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadAnalytics();

  }, []);

  return {

    analytics,

    loading,

    refresh: loadAnalytics,

  };

}