import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeroListItem } from "../components";
import { CHARACTER_PAGE_ROUTE } from "../routes/routes";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("HeroListItem", () => {
  it("renders hero name", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const heroName = "Luke Skywalker";
    render(<HeroListItem name={heroName} id={1} />);

    const heroListItem = screen.getByTestId("hero-list-button-item");
    expect(heroListItem).toBeInTheDocument();
  });

  it("calls router.push on click", async () => {
    const user = userEvent.setup();
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const heroId = 123;
    render(<HeroListItem name="Test Hero" id={heroId} />);

    const heroListItem = screen.getByTestId("hero-list-button-item");
    await user.click(heroListItem);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `${CHARACTER_PAGE_ROUTE.basePath}${heroId}`
    );
  });
});
