import User from "./User";

const App = () => {
  const user = [{ name: "Gift" }, { name: "Sam" }, { name: "Bukky" }];

  return (
    <>
      <ul>
        {user.map((user) => (
          <User key={user} name={user.name} />
        ))}
      </ul>
    </>
  );
};

export default App;
