import useSWR from 'swr';
import axios from 'axios';

// fetcher関数の定義
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useTodo = () => {
  const { data, error, isValidating, mutate } = useSWR('http://localhost:8080/api/todos', fetcher, {
    // 効果を感じないオプション
    revalidateOnMount: true,
    revalidateOnFocus: true,
  });

  // console.log('data', data);
  // console.log('error', error.info);
  // console.log('isValidating', isValidating);
  // console.log('mutate', mutate);

  return {
    todo: data,
    isLoading: !error && !data,
    isError: error,
  };
};
