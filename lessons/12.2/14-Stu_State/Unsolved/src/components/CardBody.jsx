// TODO: Add a comment explaining what is being passed to this "child" component 
//  as props
/*
  * count: The current state value
  * handleIncrement: the callback function that increases the click count
  * handleDecrement: the callback function that decreases the click count
  */

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
