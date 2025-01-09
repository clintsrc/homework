import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
/* 
 * export default is a javascript command to export a single value or function 
 *  from a module. Other source files can import the exported item
 * 
 */
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  /*
   * The useState hook is used to add state to a functional component.
   * It returns an array with two elements:
   * - The current state value (e.g. count).
   * - A function to update the state (e.g. setCount).
   * The function can be used to change the state so that
   *    anywhere the state is used, it will be updated and
   *    can be handled appropriately
   * 
   */
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  /*
   * The eventhandler uses the setCount() setter to increase
   * the count state value by 1 each time it's called.
   * 
   */
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  /*
   * The eventhandler uses the setCount() setter to decrease
   * the count state value by 1 each time it's called unless
   * the state is already at 0.
   * 
   */
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {
      /* TODO: Add a comment that explains what props are getting passed to CardBody */

      /*
       * count: The current state value
       * handleIncrement: the callback function that increases the click count
       * handleDecrement: the callback function that decreases the click count
       */
      }
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
