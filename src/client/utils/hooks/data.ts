import { FetchDataResult } from "@shared/types/data";
import { useQuery } from "react-query";
import { fetcher } from "../http";

export function useCareers(): FetchDataResult {
  const { isLoading, error, data, isFetching } = useQuery("careers", () =>
    fetcher("https://dragmove.github.io/nop/data/careers.json")
  );

  return {
    data,
    isLoading,
    error,
  };
}

export function useAwards(): FetchDataResult {
  const { isLoading, error, data, isFetching } = useQuery("awards", () =>
    fetcher("https://dragmove.github.io/nop/data/awards.json")
  );

  return {
    data,
    isLoading,
    error,
  };
}

export function useServices(): FetchDataResult {
  const { isLoading, error, data, isFetching } = useQuery("services", () =>
    fetcher("https://dragmove.github.io/nop/data/services.json")
  );

  return {
    data,
    isLoading,
    error,
  };
}
