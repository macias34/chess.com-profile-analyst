import dayjs from "dayjs";
import { Tooltip } from "@mui/material/";
import {
  UserStatsWrapper,
  UserStat,
  Icon,
  StatValue,
} from "./UserStats.styles";

const UserStats = ({ lastOnline, joined, followers }) => {
  const stats = [
    {
      id: 1,
      title: "Last online",
      icon: "fa-solid fa-signal",
      statValue: dayjs.unix(lastOnline).format("MMM DD, YYYY"),
    },
    {
      id: 2,
      title: "Joined",
      icon: "fa-solid fa-arrow-right-to-bracket",
      statValue: dayjs.unix(joined).format("MMM DD, YYYY"),
    },
    {
      id: 3,
      title: "Followers",
      icon: "fa-solid fa-user",
      statValue: parseInt(followers).toLocaleString("en-US"),
    },
  ];

  return (
    <UserStatsWrapper>
      {stats.map((stat) => (
        <Tooltip title={stat.title} placement={"top"} key={stat.id}>
          <UserStat>
            <Icon className={stat.icon} />
            <StatValue>{stat.statValue}</StatValue>
          </UserStat>
        </Tooltip>
      ))}
    </UserStatsWrapper>
  );
};

export default UserStats;
