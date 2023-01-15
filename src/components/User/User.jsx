import { UserWrapper } from "./User.styles";
import { useQuery } from "react-query";
import { getUser } from "../../queries/queries";
import { useParams } from "react-router";
import UserCard from "../UserCard/UserCard";

const User = () => {
  let { username } = useParams();
  const { data, error, isLoading } = useQuery("user", () => getUser(username));

  if (error) return <h1>Request failed..</h1>;
  if (isLoading) return <p>Loading..</p>;

  return (
    <UserWrapper>
      <UserCard data={data} />
    </UserWrapper>
  );
};

export default User;
