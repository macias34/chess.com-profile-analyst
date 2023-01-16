import { UserWrapper } from "./User.styles";
import { useQuery } from "react-query";
import { getUser, getUserStats } from "../../queries/queries";
import { useParams } from "react-router";
import UserCard from "../UserCard/UserCard";
import Stats from "../Stats/Stats";

const User = () => {
  let { username } = useParams();
  const {
    data: cardData,
    error: cardError,
    isLoading: cardIsLoading,
  } = useQuery("user", () => getUser(username));

  const {
    data: statsData,
    error: statsError,
    isLoading: statsIsLoading,
  } = useQuery("stats", () => getUserStats(username));

  if (cardData?.code === 0 || statsData?.code) return <h1>User not found.</h1>;
  if (cardError || statsError) return <h1>Request failed..</h1>;
  if (cardIsLoading || statsIsLoading) return <p>Loading..</p>;

  return (
    <UserWrapper>
      <UserCard data={cardData} />
      <Stats data={statsData} />
    </UserWrapper>
  );
};

export default User;
