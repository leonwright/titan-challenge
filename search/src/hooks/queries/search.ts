import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SearchResponse {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

export interface Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export interface Hits {
  total: Total;
  max_score: number;
  hits: Hit[];
}

export interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
}

export interface Source {
  username: string;
  post_date: string;
  message: string;
}

export interface Total {
  value: number;
  relation: string;
}

// elastic url: https://test-4af165.es.us-central1.gcp.cloud.es.io

// call elastic search api using fetch
const search = async (query: string): Promise<Source[]> => {
  const response = await axios.post<SearchResponse>(
    "http://localhost:9200/titan/_search",
    {
      query: {
        multi_match: {
          query: query,
          fields: ["username", "message"],
          type: "phrase_prefix",
        },
      },
    }
  );

  const result: Source[] = [];

  response.data.hits.hits.forEach((hit) => {
    result.push(hit._source);
  });

  return result;
};

export const useSearch = (query: string) => {
  return useQuery(["search", query], () => search(query), {
    enabled: query !== null,
  });
};
