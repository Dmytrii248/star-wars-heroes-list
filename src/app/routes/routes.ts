export interface IRoute {
  pathname: string;
  basePath?: string;
}

export const HOME_ROUTE = {
  pathname: "/[page]",
  basePath: "/",
};
export const CHARACTER_PAGE_ROUTE = {
  pathname: "/character/[id]",
  basePath: "/character/",
};
