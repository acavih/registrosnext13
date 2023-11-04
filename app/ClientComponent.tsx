"use client"

import { useEffect } from "react";

export function ClientComponent() {
  useEffect(() => {
    console.log('en client component')
  }, [])
  return (
    <p>Client component</p>
  );
}
