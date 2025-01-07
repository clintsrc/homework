
function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            {item.name} {item.purchased ? "(Purchased)" : "(Not Purchased)"}
          </li>
        );
      })}
    </ul>
  );
}

/*
// BONUS: use the filter() method to only list the unpurchased groceries
function List(props) {
  const unpurchasedGroceries = props.groceries.filter(item => !item.purchased);

  return (
    <ul className="list-group">
      {unpurchasedGroceries.map(item => (
        <li key={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}
*/

export default List;
