import CourseGoal from "./components/CourseGoal";
import Headers from "./components/Headers";
import goalImg from "./assets/goals.jpg";

export default function App() {
  function handleAddGoal() {}

  return (
    <main>
      <Headers image={{ src: goalImg, alt: "The image of our goal" }}>
        <h1>My Course Goals</h1>
      </Headers>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React + Typescript">
        <p>Learning from the ground up</p>
      </CourseGoal>
    </main>
  );
}
