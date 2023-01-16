import { StatsWrapper } from "./Stats.styles";
import Stat from "../Stat/Stat";
const Stats = ({ data }) => {
  const { chess_rapid: rapid, chess_bullet: bullet, chess_blitz: blitz } = data;

  const stats = [
    {
      data: rapid,
      color: "limegreen",
      icon: "fa-solid fa-stopwatch",
      label: "rapid",
    },
    {
      data: blitz,
      color: "yellow",
      icon: "fa-solid fa-bolt",
      label: "blitz",
    },
    {
      data: bullet,
      color: "#a58a45",
      icon: "fa-solid fa-gun",
      label: "bullet",
    },
  ];

  return (
    <StatsWrapper>
      {stats.map((stat) => (
        <Stat
          key={stat.label}
          data={stat.data}
          color={stat.color}
          label={stat.label}
          icon={stat.icon}
        />
      ))}
    </StatsWrapper>
  );
};

export default Stats;
