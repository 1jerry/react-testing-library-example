import { render } from "@testing-library/react";
import CommentFeed from "./CommentFeed";

describe("CommentFeed", () => {
  it("renders the commentFeed", () => {
    const { queryByText } = render(<CommentFeed header="Comment Feed" />);
    const header = queryByText("Comment Feed");
    expect(header).toBeTruthy();
    expect(header.innerHTML).toBe("Comment Feed");
  });
});
