import { useMutation } from "@tanstack/react-query";
import { createUser } from "./api";
import { Login } from "@/types/login";

export const useCreataeUser = () => {

  return useMutation({
    mutationFn: (data: Login) => createUser(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: (data, variables, context) => {
      console.log("success");
    },
    onSettled: async (data, error, context) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        // Run invalidateQueries to update any state if needed.
        // await queryClient.invalidateQueries({ queryKey: [] })
      }
    }
  });

};