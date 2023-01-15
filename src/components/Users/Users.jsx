import { useQueries, useQuery } from "react-query";
import User from "../User/User";
import UserCard from "../UserCard/UserCard";
import { UsersWrapper } from "./Users.styles";
import { getUser } from "../../queries/queries";

const usernames = ["magnuscarlsen"];

const Users = () => {
  const userDatas = useQueries(
    usernames.map((username) => {
      return {
        queryKey: username + "_user",
        queryFn: async () => await getUser(username),
      };
    })
  );

  const isLoading = userDatas.some((userData) => userData.isLoading);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <UsersWrapper>
      {userDatas.length > 0 ? (
        userDatas.map(({ data }) => (
          <UserCard
            key={data.username}
            data={data}
            backgroundColor={"#4c00b0"}
          />
        ))
      ) : (
        <h1>No usernames in array.</h1>
      )}
    </UsersWrapper>
  );
};

export default Users;
