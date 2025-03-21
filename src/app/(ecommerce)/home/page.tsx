import Link from "next/link";
import styles from "./Home.module.css";

const Home = () => {
  const categories = ["aspiradoras", "robots"];
  return (
    <div>
      <h1>Página de Inicio</h1>
      <div className="flex flex-col">
        {categories.map((category) => (
          <Link key={category} href={`/${category}`}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
