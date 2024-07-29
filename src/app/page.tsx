"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IPersonsResponse } from "./models";
import { getListOfHeroes } from "./api";
import { HOME_ROUTE } from "./routes/routes";
import { HeroListItem, Pagination } from "./components";

const Page = ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const router = useRouter();

  const [heroesData, setHeroesData] = useState<IPersonsResponse | null>(null);
  const [page, setPage] = useState(Number(searchParams?.page) || 1);

  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getListOfHeroes(page);

      if (isLoadMore && heroesData && data) {
        setHeroesData({
          ...heroesData,
          results: [...heroesData.results, ...data.results],
        });
      } else {
        setHeroesData(data);
      }
    })();

    router.replace(`${HOME_ROUTE.basePath}/?page=${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextPage = () => {
    setIsLoadMore(false);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setIsLoadMore(false);
    setPage((prev) => prev - 1);
  };
  const loadMore = () => {
    setIsLoadMore(true);
    setPage((prev) => prev + 1);
  };

  if (!heroesData) {
    return (
      <div className="h-screen flex justify-center items-center">Loading</div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-4">
      <div className="flex flex-col gap-2 justify-start">
        {heroesData.results.map((e) => (
          <HeroListItem name={e.name} id={e.id} key={e.id} />
        ))}
      </div>
      <Pagination
        next={nextPage}
        previous={prevPage}
        loadMore={loadMore}
        currentPage={page}
        totalPages={Math.ceil(heroesData.count / 10)}
      />
    </div>
  );
};

export default Page;
