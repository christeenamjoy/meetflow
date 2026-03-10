import {useState} from "react";

export function useFetch<T, A extends any[]>(cb: (...args: A) => Promise<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fn = async (...args: A) => {
    try {
      setLoading(true);
      const response = await cb(...args);
      setData(response);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {data, loading, error, fn};
}
