import { createClient } from "@/app/utils/supabase/client";
import { useCallback, useEffect, useState } from "react";

const supabase = createClient();

type Capital = {
  id?: number;
  capital: number;
  purchase: number;
  sell: number;
  date: Date;
  created_at?: Date;
  updated_at?: Date;
};

export const useFetchCapital = () => {
  const [data, setData] = useState<Capital[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string>("");
  const [status, setStatus] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data, count, error, status, statusText } = await supabase
      .from("capitals")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setData(data);
      setCount(count);
      setStatusText(statusText);
      setStatus(status);
    }
    setLoading(false);
  }, []);

  const insertData = useCallback(async (transaction: Capital) => {
    setLoading(true);
    const { error } = await supabase.from("capitals").insert([transaction]);

    if (error) setError(error.message);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    count,
    error,
    status,
    statusText,
    loading,
    insertData,
    refetch: fetchData,
  };
};
