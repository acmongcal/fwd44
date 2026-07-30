import { useState } from "react";
import { useUser } from "../hooks/useUser";

function UserManager({ handleValidation, createNewUser = false }) {
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);

  const { user, createUser } = useUser();

  function handleUpdateUser(e) {
    e.preventDefault();
    const newUsername = e.target.elements.username.value.trim();
    const newLocation = e.target.elements.location.value.trim();

    let isFormValid = true;

    // Validate user
    if (newUsername === "") {
      setErrorUsername("Invalid username...");
      isFormValid = false;
    }

    if (newLocation === "") {
      setErrorLocation("Invalid location...");
      isFormValid = false;
    }

    if (isFormValid) {
      createUser({
        username: newUsername,
        location: newLocation,
      });
      if (createNewUser) {
        handleValidation();
        return;
      }
      e.target.elements.username.value = "";
      e.target.elements.location.value = "";
    }
  }

  function handleInputChange(e) {
    const inputText = e.target.value.trim();
    if (inputText !== "") {
      if (e.target.name === "username") {
        setErrorUsername(false);
      } else {
        setErrorLocation(false);
      }
    }
  }

  return (
    <div className="manage-user">
      {user.username ? (
        <div className="current-user-info">
          <h3>Current User</h3>
          <p>
            <b>Username: </b>
            {user.username}
          </p>
          <p>
            <b>Location: </b>
            {user.location}
          </p>
        </div>
      ) : null}
      <div className="update-or-create-user">
        {user.username ? <h3>Update Your User Info</h3> : null}
        <form
          onSubmit={handleUpdateUser}
          className="form-update-or-create-username"
        >
          <div className="input-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleInputChange}
            />
            {errorUsername !== false && (
              <span className="error">&#42; {errorUsername}</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleInputChange}
            />
            {errorLocation !== false && (
              <span className="error">&#42; {errorLocation}</span>
            )}
          </div>
          <div className="submit-group">
            <input
              type="submit"
              value={createNewUser ? "Create User" : "Update User"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserManager;
