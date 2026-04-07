"use client";

import React from "react";

export function PageLoadFadeIn({ children }: { children: React.ReactNode }) {
  return <div id="site-content">{children}</div>;
}
