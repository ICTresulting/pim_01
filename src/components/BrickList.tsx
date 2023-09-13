import useBricks from "../hooks/useBricks";

const BrickList = () => {
  const { bricks } = useBricks();
  return (
    <ul>
      {bricks.map((brick) => (
        <li key={brick.id}>
          {brick.code} {brick.description}
        </li>
      ))}
    </ul>
  );
};

export default BrickList;
