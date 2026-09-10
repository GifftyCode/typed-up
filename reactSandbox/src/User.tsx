type userName = {
  name: string;
};

export default function User({ name }: userName) {
  return <li>User: {name}</li>;
}
