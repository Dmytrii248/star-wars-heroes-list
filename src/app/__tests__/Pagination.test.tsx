import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../components";

describe("Pagination component", () => {
  const mockNext = jest.fn();
  const mockPrevious = jest.fn();
  const mockLoadMore = jest.fn();

  it("renders load more button", () => {
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={1}
        totalPages={5}
      />
    );
    const loadMoreButton = screen.getByRole("button", { name: "Load more" });
    expect(loadMoreButton).toBeInTheDocument();
  });

  it("renders pagination controls", () => {
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={2}
        totalPages={5}
      />
    );

    const previousButton = screen.getByTestId("previous-button");
    const pageNumbers = screen.getByText("Page 2 of 5");
    const nextButton = screen.getByTestId("next-button");

    expect(previousButton).toBeInTheDocument();
    expect(pageNumbers).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("disables load more button when on last page", () => {
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={5}
        totalPages={5}
      />
    );

    const loadMoreButton = screen.getByTestId("load-more-button");
    expect(loadMoreButton).toBeDisabled();
  });

  it("disables previous button on first page", () => {
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={1}
        totalPages={5}
      />
    );

    const previousButton = screen.getByTestId("previous-button");
    expect(previousButton).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={5}
        totalPages={5}
      />
    );

    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeDisabled();
  });

  it("calls next function when next button clicked", async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        next={mockNext}
        previous={mockPrevious}
        loadMore={mockLoadMore}
        currentPage={2}
        totalPages={5}
      />
    );

    const nextButton = screen.getByTestId("next-button");
    await user.click(nextButton);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
