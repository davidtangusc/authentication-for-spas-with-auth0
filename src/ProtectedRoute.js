import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

/**
  ProtectedRoute is a Higher-Order Component.
  First, to understand what a Higher-Order Component (HOC) is, we need to understand what a Higher-Order Function (HOF) is.
  A HOF is a function that operates on other functions, either by taking them as arguments or by returning them.

  Example: greaterThan is a HOF that returns a function

  function greaterThan(n) {
    return m => m > n;
  }

  const greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11));


  Example: logResult is a HOF that accepts and returns a function

  function sum(a, b) {
    return a + b;
  }

  function logResult(fn) {
    return (a, b) => {
      const result = fn(a, b);
      console.log(result);
      return result;
    };
  }

  const sumWithLogging = logResult(sum);
  sumWithLogging(2, 3);
*/

export default function ProtectedRoute(props) {
  const { component, ...remainingProps } = props;

  /**
    Example of Rest parameters when destructuring an object

    const david = {
      first: 'David',
      last: 'Tang',
      school: 'USC'
    };

    const { first, ...remainingProperties } = david;
    remainingProperties
  */

  return (
    <Route
      component={withAuthenticationRequired(component, {
        // Show a message while the user waits to be redirected to the login page.
        onRedirecting: () => <Loading />,
      })}
      {...remainingProps}
    />
  );
}
