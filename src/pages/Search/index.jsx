import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as S from "./styles";
import * as G from "../../global/styles";

function Search() {
  const [animesSearch, setAnimesSearch] = useState([]);
  const [search, setSearch] = useState(null);
  const searchValueRef = useRef(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchValueRef.current.value.trim()) {
      alert("Campo de busca vazio");
      return;
    }
    setSearch(searchValueRef.current.value);
  }

  useEffect(() => {
    if (!search) return;
    async function searchAnimes() {
      try {
        const query = search?.replace("?", "")?.replace(/[^a-zA-Zs]/g, "_");

        if (query !== "") {
          const { data } = await api.get(`/play-api.php?search=${query}`);

          if (Array.isArray(data)) {
            setAnimesSearch(data.slice(0, 20));
          }

          if (data === null) {
            alert("Nenhum anime encontrado");
            setAnimesSearch([]);
          }
        } else {
          setAnimesSearch([]);
        }
      } catch (err) {
        console.log("Err on search anime", err);
      }
    }
    searchAnimes();
  }, [search]);

  function goToAnimePage(id) {
    navigate(`/anime/${id}`);
  }

  return (
    <G.Container>
      <S.SearchBox onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar animes..."
          ref={searchValueRef}
        />
        <button type="submit" onClick={handleSubmit}>
          <span>Buscar</span>
          <svg
            className="searchBtn-image"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
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
        </button>
      </S.SearchBox>
      {animesSearch?.length > 0 ? (
        <S.Results>
          <h1>
            <span>{animesSearch.length}</span> RESULTADOS:
          </h1>
          <G.List>
            {animesSearch?.map((item, index) => (
              <G.ListItem
                key={`result-${index}-${item.id}`}
                onClick={() => goToAnimePage(item.id)}
              >
                <G.SliderCardMid
                  bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                >
                  <G.SliderCardText>{item.category_name}</G.SliderCardText>
                </G.SliderCardMid>
              </G.ListItem>
            ))}
          </G.List>
        </S.Results>
      ) : (
        <h1>NADA POR AQUI...</h1>
      )}
    </G.Container>
  );
}

export default Search;
