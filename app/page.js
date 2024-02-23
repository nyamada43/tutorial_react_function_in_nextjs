import LikeButton from "./like-button";

function Header({title}) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['React', "Next", "Wow"];

  return (
    <div>
      <Header title="React" />
      <p>Start building your app with React 18 and Vite.</p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
