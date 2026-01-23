import { Link } from "react-router";
export default function AppSummary() {
  return <>
    <div>App Summary</div>;
    <Link to="/budget">Budget</Link>
    <Link to="/budget/create">Create Budget</Link>
  </>;
}
