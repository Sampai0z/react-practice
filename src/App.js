import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
	const [userList, setUserList] = useState([]);

	const myUsers = (uName, uAge) => {
		setUserList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<AddUser onEventProp={myUsers} />
			<UsersList users={userList} />
		</div>
	);
}

export default App;
