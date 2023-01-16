export const getUser = async (username) => {
  const url = `https://api.chess.com/pub/player/${username}`;
  const res = await fetch(url);

  return res.json();
};

export const getUserStats = async (username) => {
  const url = `https://api.chess.com/pub/player/${username}/stats`;
  const res = await fetch(url);

  return res.json();
};
