export default function msgQuery(position_idx: string) {
  const query = {
    mirror_position: {
      position_index: position_idx
    }
  };
  return query;
}
