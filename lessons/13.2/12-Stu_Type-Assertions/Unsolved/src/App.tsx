import "./App.css";
import { useEffect, useState } from "react";
import User from "../src/interfaces/User";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  // TODO: add type assertion to the useState hook
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    setUser({
      name: "John Doe",
      email: "john@doe.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, CA 12345",
    });
  }, []);

  return (
    <>
      <Nav name={user?.name || ""} />
      {/* TODO: Pass the necessary props to the Profile component */}
      <Profile
        name={user?.name || ""}
        email={user?.email || ""}
        phone={user?.phone || ""}
        address={user?.address || ""}
      />
    </>
  );
}

export default App;
