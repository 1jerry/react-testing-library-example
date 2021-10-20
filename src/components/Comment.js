const Comments = (props) => {
  return (
    <div className="Comment">
      <h4>{props.author}</h4>
      <p>{props.text}</p>
    </div>
  )
}
export default Comments
