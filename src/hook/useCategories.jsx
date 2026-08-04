import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import axiosInstance from "../api/axiosInstance";

function useCategories() {
  const { i18n } = useTranslation();
  const token = localStorage.getItem("accessToken");

  const getCategories = async () => {
    const response = await axiosInstance.get("/Categories", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Accept-Language": i18n.language,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: ["categories", i18n.language],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
}

export default useCategories;
