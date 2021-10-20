import { render } from "@testing-library/react"
import CommentFeed from "./CommentFeed"

describe("CommentFeed", () => {
  let comments = [
    {
      author: "Ian Wilson",
      text: "A boats a boat but a mystery box could be anything.",
    },
    {
      author: "Max Powers Jr",
      text: "Krypton sucks.",
    },
  ]
  const props = { header: "Comment Feed", comments }
  it("renders the commentFeed", () => {
    const { queryByText } = render(<CommentFeed {...props} />)
    const header = queryByText(props.header)
    expect(header).toBeTruthy()
    expect(header.innerHTML).toBe(props.header)
  })
  it("renders the comment list", () => {
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll(".Comment")
    expect(commentNodes.length).toBe(props.comments.length)
  })
})
