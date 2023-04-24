import "./App.css";
import Card from "./components/Card";
import Events from "./components/Events";
// import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import { users } from "./Data";

function App() {
  return (
    <>
      <div>
        <Events />
        {/* <h1>List of Users</h1>
        {users.map((user) => {
          return (
            <Card key={user.id}>
              <Users name={user.name} job={user.job} />
            </Card>
          );
        })} */}

        {/* <Users name="Melody" job="Developer" />
        <Users />
        <Users /> */}
      </div>
    </>
  );
}

export default App;
