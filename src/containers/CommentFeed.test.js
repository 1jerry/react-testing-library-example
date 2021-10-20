import { render, fireEvent } from "@testing-library/react"
import CommentFeed from "./CommentFeed"

const createProps = (props) => ({
  header: "Comment Feed",
  comments: [
    {
      author: "Ian Wilson",
      text: "A boats a boat but a mystery box could be anything.",
    },
    { author: "Max Powers Jr", text: "Krypton sucks." },
  ],
  createComment: jest.fn(),
  ...props,
})
describe("CommentFeed", () => {
  it("renders the commentFeed", () => {
    // Arrange - create props and locate elements
    const newComment = { author: "Socrates", text: "Why?" }
    let props = createProps()
    const { container, getByLabelText } = render(<CommentFeed {...props} />)
    const authorNode = getByLabelText("Author")
    const textNode = getByLabelText("Comment")
    const formNode = container.querySelector("form")

    // Act - simulate changes to elements
    fireEvent.change(authorNode, {
      target: { value: newComment.author },
    })
    fireEvent.change(textNode, {
      target: { value: newComment.text },
    })
    fireEvent.submit(formNode)

    // Assert - check whether the desired functions were called
    expect(props.createComment).toHaveBeenCalledTimes(1)
    expect(props.createComment).toHaveBeenCalledWith(newComment)
  })
  it("renders the comment list", () => {
    let props = createProps()
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll(".Comment")
    expect(commentNodes.length).toBe(props.comments.length)
  })
})
