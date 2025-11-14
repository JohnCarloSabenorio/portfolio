import Role from "./Role";
import Profile from "./Profile";
export default function Greeting() {
  return (
    <div className="text-center md:text-left">
      <div># Bluem</div>
      <div>Hi👋! My name is</div>
      <div className="big-text titan-one-bold mb-3">John Carlo Sabenorio</div>
      <Profile />
      <Role />
    </div>
  );
}
