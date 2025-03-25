"use client";

import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import styles from "./empty-state.module.css";

type EmptyStateProps = {
  label: string;
  buttonLabel: string;
  routeToNavigate: string;
};

const EmptyState = ({
  label,
  routeToNavigate,
  buttonLabel,
}: EmptyStateProps) => {
  const router = useRouter();
  const route = `/${routeToNavigate}`;
  return (
    <div className={styles.container}>
      <Typography label={label} variant="h2" className="text-center" />
      <Button variant="primary" onClick={() => router.push(route)}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export { EmptyState };
