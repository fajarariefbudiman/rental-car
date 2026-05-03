import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RouteProgress = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-0.5 bg-transparent">
      <div className="h-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] animate-progress-grow" />
    </div>
  );
};
