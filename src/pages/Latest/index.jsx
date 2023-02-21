import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import * as S from "./styles";

function Latest() {
  const navigate = useNavigate();
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    async function getLatest() {
      try {
        const { data } = await api.get("/play-api.php?latest");
        setLatest(data);
      } catch (err) {
        console.log("Err on get latest releases", err);
      }
    }
    getLatest();
  }, []);

  function handleClickEpisode(catId, videoId) {
    navigate(`/anime/${catId}/episode/${videoId}`);
  }

  return (
    <S.Container>
      <h1>Últimos Episódios</h1>
      <S.Page>
        {latest?.map((item, index) => (
          <S.PageItem
            key={`latest-${index}-${item.id}`}
            onClick={() => handleClickEpisode(item.category_id, item.video_id)}
          >
            <S.PageCard
              bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
            >
              <span>{item.title}</span>
            </S.PageCard>
          </S.PageItem>
        ))}
      </S.Page>
    </S.Container>
  );
}

export default Latest;
