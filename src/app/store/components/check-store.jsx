"use client";

import { useStoreStore } from "@/store/useStoreStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckStore = () => {
  const store = useStoreStore((state) => state.store);
  const router = useRouter();

  useEffect(() => {
    if (!store) {
      router.replace("/store/register-info");
    }
  }, [store, router]);

  return null;
};

export default CheckStore;
