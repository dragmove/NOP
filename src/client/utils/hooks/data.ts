import { FetchDataResult } from "@shared/types/data";
import { useQuery } from "react-query";
import { fetcher } from "../http";

export function useCareers(): FetchDataResult {
  return fetchData({
    queryKey: "careers",
    url: "https://dragmove.github.io/nop/data/careers.json",
  });
}

export function useAwards(): FetchDataResult {
  return fetchData({
    queryKey: "awards",
    url: "https://dragmove.github.io/nop/data/awards.json",
  });
}

export function useProfile(): FetchDataResult {
  return fetchData({
    queryKey: "profile",
    url: "https://dragmove.github.io/nop/data/profile.json",
  });
}

export function useServices(): FetchDataResult {
  return fetchData({
    queryKey: "services",
    url: "https://dragmove.github.io/nop/data/services.json",
  });
}

function fetchData(options: { queryKey: string; url: string }) {
  const { queryKey, url } = options;

  const { isLoading, error, data, isFetching } = useQuery(queryKey, () =>
    fetcher(url)
  );

  return {
    data,
    isLoading,
    error,
  };
}
