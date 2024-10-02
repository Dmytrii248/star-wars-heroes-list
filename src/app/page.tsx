import { getListOfHeroes } from "./api";
import { HeroListItem, Pagination } from "./components";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const page = Number(searchParams?.page) || 1;
  const heroesData = await getListOfHeroes(page);

  if (!heroesData) {
    return (
      <div className="h-screen flex justify-center items-center">Loading</div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col gap-2 justify-start">
        {heroesData.results.map((e) => (
          <HeroListItem name={e.name} id={e.id} key={e.id} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(heroesData.count / 10)}
      />
    </div>
  );
};

export default Page;
