"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

export default function AppClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}