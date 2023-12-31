"use client";

import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  if (isLoading || status === "loading") return "Loading...";
  function handleUpdate(e: React.FormEvent<HTMLFormElement>, id: string): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    toast.success("Order status has been changed:")
  }

  return (
    <div className=" p-4 lg:px-20 xl:px-40">
      <table className="  w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className=" hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className=" hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: OrderType) => (
            <tr key={item.id} className={` text-sm md:text-base ${item.status !== "delivered" && "bg-red-100"}`}>
              <td className=" hidden md:block py-6 px-1">{item.id}</td>
              <td className=" py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className=" py-6 px-1">{item.price}</td>
              <td className=" hidden md:block py-6 px-1">
                {item.products[0].title}
              </td>

              {session?.user.isAdmin ? (
                <td className="">
                  <form
                    className="flex items-center justify-center"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      className="p-2 ring-1 ring-red-100 rounded-md text-gray-600"
                      placeholder={item.status}
                    ></input>
                    <button type="submit">
                      <i className="pi pi-pencil ml-5 cursor-pointer"></i>
                    </button>
                  </form>
                </td>
              ) : (
                <td className=" py-6 px-1">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;


// 1.34
