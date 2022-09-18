import Posts from "./../components/Posts";
import Header from "../components/Header";
import Stories from "../components/Stories";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="pt-16 dark:bg-slate-900">
      <Header />
      <Stories />
      <Posts />
      <BottomNav />
    </div>
  );
}
