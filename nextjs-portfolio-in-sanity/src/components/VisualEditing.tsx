"use client";

import { enableVisualEditing } from "@sanity/visual-editing";
import { useEffect } from "react";

export default function VisualEditingComponent() {
  useEffect(() => {
    enableVisualEditing();
  }, []);
  
  return null;
}
