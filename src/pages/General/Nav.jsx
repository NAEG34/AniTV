import * as S from "./styles";
import logoImg from "../../assets/anim-pj.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [miniBar, setMiniBar] = useState(null);

  return (
    <S.Header>
      <S.Container>
        <NavLink to="/">
          <img src={logoImg} alt="Logo" />
        </NavLink>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/lancamentos">Lançamentos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/none">Categoria</NavLink>
          </li>
        </ul>
        <div
          className="topBar"
          onClick={() => {
            !miniBar ? setMiniBar("active") : setMiniBar(null);
            console.log(miniBar);
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul
          className={!miniBar ? "miniMenu" : "miniMenu active"}
          onClick={() => setMiniBar(null)}
        >
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/lancamentos">Lançamentos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/none">Categoria</NavLink>
          </li>
          <li>
            <NavLink to="/pesquisa">Pesquisar</NavLink>
          </li>
        </ul>
        <NavLink to="/pesquisa" className="search-btn">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
              ></path>
            </g>
          </svg>
        </NavLink>
      </S.Container>
    </S.Header>
  );
}

export default Navbar;
