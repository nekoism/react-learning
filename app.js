import "./styles.css";

export default function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const people = { name: "yoshi", age: 30 }; boolean and object cannot be displayed
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes} times</p>

        <p>{/*can be used to write javascript code*/ ["d", "i", "v"]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}> Google</a>
      </div>
    </div>
  );
}
