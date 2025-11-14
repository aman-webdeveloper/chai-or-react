import React, { useState } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  // ✅ State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Sample user data
  const user = {
    name: "Aman Kumar",
    age: 22,
    email: "aman@example.com",
  };

  // ✅ Function to toggle login state
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // updates state → triggers re-render
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      {/* ✅ Composition: using multiple components together */}
      <Header title="User Dashboard" />

      {/* ✅ Conditional Rendering based on login status */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome Back, {user.name}! 🎉</h2>
          {/* ✅ Passing state data as props */}
          <UserCard name={user.name} age={user.age} email={user.email} />
          <button onClick={handleLogin}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Log In to See Your Dashboard 🔐</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* ✅ Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
