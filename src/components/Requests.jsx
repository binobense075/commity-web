import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addRequests(res.data.connectionRequests));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <div>No request found</div>;

  return (
    <div className="text-center mt-5">
      <h1 className="font-bold text-3xl">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-evenly items-center bg-base-300 m-4 p-4 w-1/2 mx-auto rounded-lg"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="mx-8 text-left">
              <h1>{firstName + " " + lastName}</h1>
              {age && gender && <h1>{age + " - " + gender}</h1>}
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-active btn-primary mx-2">
                Reject
              </button>
              <button className="btn btn-active btn-secondary mx-2">
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
