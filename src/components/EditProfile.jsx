import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleSaveProfile = async () => {
    // clear errors
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center mx-10">
        <div className="card bg-base-300 w-80 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
              <fieldset className="fieldset">
                <label className="label">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  className="input w-full"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="label">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  className="input w-full"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label className="label">PhotoUrl</label>
                <input
                  type="text"
                  value={photoUrl}
                  className="input w-full"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
                <label className="label">Age</label>
                <input
                  type="text"
                  value={age}
                  className="input w-full"
                  onChange={(e) => setAge(e.target.value)}
                />
                <label className="label">Gender</label>
                <input
                  type="text"
                  value={gender}
                  className="input w-full"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="label">About</label>
                <input
                  type="text"
                  value={about}
                  className="input w-full"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleSaveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
    </div>
  );
};

export default EditProfile;
