import PersonalInfo from "../PersonalInfo/PersonalInfo";
import UserStats from "../UserStats/UserStats";
import { UserCardWrapper, Avatar, UserInfo, Stats } from "./UserCard.styles";

const UserCard = ({ data, backgroundColor }) => {
  const {
    username,
    avatar: avatarSrc,
    name,
    title,
    location,
    url,
    last_online: lastOnline,
    joined,
    followers,
  } = data;

  return (
    <UserCardWrapper backgroundColor={backgroundColor}>
      <Avatar avatarSrc={avatarSrc} />
      <UserInfo>
        <PersonalInfo
          title={title}
          username={username}
          name={name}
          location={location}
          url={url}
        />
        <UserStats
          lastOnline={lastOnline}
          joined={joined}
          followers={followers}
        />
      </UserInfo>
    </UserCardWrapper>
  );
};

export default UserCard;
