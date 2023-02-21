import * as S from "./styles";
import logoImg from "../../assets/anim-pj.png";
import { redirect } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const currentPath = window.location.pathname;

  const getStyle = (path) => ({
    color: currentPath === path ? "#fe1e54" : "#a8a8a8",
  });

  // useEffect(() => {
  //   const changeNavbar = () => {
  //     if (window.scrollY >= 66) {
  //       setNavbar(true);
  //       console.log("atv");
  //     } else {
  //       setNavbar(false);
  //       console.log("desatv");
  //     }
  //   };
  //   window.addEventListener("scroll", changeNavbar);
  // }, [navbar]);
  return (
    <S.Header>
      <S.Container
      // className={navbar ? "navbar-active" : "navbar"}
      >
        <a href="/">
          <img src={logoImg} alt="Logo" />
        </a>
        <ul>
          <li>
            <a href="/" className="active">
              Início
            </a>
          </li>
          <li>
            <a href="/lancamentos">Lançamentos</a>
          </li>
          <li>
            <a href="/categoria/none">Categoria</a>
          </li>
        </ul>

        <a
          href="/pesquisa"
          className={
            currentPath === "/pesquisa" ? "searchBtn-active" : "searchBtn"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 48 48"
          >
            <path d="M39.75 43.35 26.3 29.95q-1.45 1.15-3.425 1.8-1.975.65-4.275.65-5.75 0-9.75-4t-4-9.65q0-5.65 4-9.65t9.7-4q5.65 0 9.625 4 3.975 4 3.975 9.65 0 2.25-.625 4.175-.625 1.925-1.875 3.625l13.5 13.4ZM18.55 27.7q3.75 0 6.325-2.625t2.575-6.325q0-3.75-2.575-6.35Q22.3 9.8 18.55 9.8t-6.375 2.6Q9.55 15 9.55 18.75q0 3.7 2.625 6.325T18.55 27.7Z" />
          </svg>
        </a>
      </S.Container>
    </S.Header>
  );
}

export default Navbar;
