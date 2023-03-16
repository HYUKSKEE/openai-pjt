//import Image from "next/image";
///import { Inter } from "next/font/google";
//import styles from "./page.module.css";
import Main from "./main/page";
import Aside from "../components/Aside";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Aside />
      <Main />
    </div>
  );
}
