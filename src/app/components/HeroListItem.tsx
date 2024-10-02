import { FC } from "react";
import { CHARACTER_PAGE_ROUTE } from "../routes/routes";
import Link from "next/link";

interface IProps {
  name: string;
  id: number;
}

export const HeroListItem: FC<IProps> = ({ name, id }) => (
  <Link
    href={`${CHARACTER_PAGE_ROUTE.basePath}${id}`}
    data-testid="hero-list-button-item"
  >
    {name}
  </Link>
);
