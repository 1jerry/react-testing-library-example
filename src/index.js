import { StrictMode } from "react"
import ReactDOM from "react-dom"
import CommentFeed from "./containers/CommentFeed"

const comments = [
  { author: "Ian Wilson", text: "A boats a boat but a my" },
  { author: "Max Powers", text: "Krypton sucks." },
  { author: "Kent Beck", text: "Red, Green, Refactor" },
]
const App = () => <CommentFeed comments={comments} />

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
)
