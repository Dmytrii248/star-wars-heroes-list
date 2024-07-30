"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { CHARACTER_PAGE_ROUTE } from "../routes/routes";

interface IProps {
  name: string;
  id: number;
}

export const HeroListItem: FC<IProps> = ({ name, id }) => {
  const router = useRouter();

  const heroDetails = () => {
    router.push(`${CHARACTER_PAGE_ROUTE.basePath}/${id}`);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={heroDetails}
      data-testid="hero-list-item"
    >
      {name}
    </div>
  );
};
