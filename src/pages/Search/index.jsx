import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import * as S from "./styles";

function Search() {
  const [animesSearch, setAnimesSearch] = useState([]);
  const [search, setSearch] = useState(null);
  const searchValueRef = useRef(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchValueRef.current.value.trim()) {
      return;
    }
    setSearch(searchValueRef.current.value);
  }

  useEffect(() => {
    if (!searchValueRef) return;

    async function searchAnimes() {
      try {
        const query = search?.replace("?", "")?.replace(/[^a-zA-Zs]/g, "_");

        if (query !== "") {
          const { data } = await api.get(`/play-api.php?search=${query}`);

          if (Array.isArray(data)) {
            setAnimesSearch(data.slice(0, 20));
          }

          if (data === null) {
            setAnimesSearch([]);
            // alert("Nenhum resultado encontrado...");
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
    <S.Container>
      <S.SearchBox onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar animes..."
          ref={searchValueRef}
        />
        <button type="submit">Buscar</button>
      </S.SearchBox>
      {animesSearch?.length > 0 ? (
        <S.Results>
          <h1>
            <span>{animesSearch.length}</span> RESULTADOS:
          </h1>
          <S.Page>
            {animesSearch?.map((item, index) => (
              <S.PageItem
                key={`latest-${index}-${item.id}`}
                onClick={() => goToAnimePage(item.vide_id)}
              >
                <S.PageCard
                  bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                >
                  <span>{item.title}</span>
                </S.PageCard>
              </S.PageItem>
            ))}
          </S.Page>
        </S.Results>
      ) : (
        <h1>NADA POR AQUI...</h1>
      )}
    </S.Container>
  );
}

export default Search;
