import React from "react";
import authAxiosInstance from "../api/authAxiosInstance";
import { useMutation } from "@tanstack/react-query";

function useCheckout() {
  return useMutation({
    mutationFn: async ({ paymentMethod }) => {
      return await authAxiosInstance.post("/Checkouts", { paymentMethod });
    },
    onSuccess: (response) => {
      if (response?.data?.url) {
        window.location.href = response.data.url;
      }
    },
  });
}

export default useCheckout;
