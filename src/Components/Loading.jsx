
const Loading = () => {
  return (
    <>
    <div className="d-flex justify-content-center loading__message">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden m-1">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    </>
  )
}

export default Loading
