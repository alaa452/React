import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../api/axiosInstance';

function useProducts() {
  const { i18n } = useTranslation();

  const getProducts = async () => {
    const response = await axiosInstance.get('/Products', {
      headers: {
        'Accept-Language': i18n.language,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: ['products', i18n.language],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
}

export default useProducts;