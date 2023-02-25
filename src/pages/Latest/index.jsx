import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import * as G from "../../global/styles";
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
    <G.Container>
      <h1>Últimos Episódios</h1>
      <G.SliderContainer>
        <G.List>
          {latest?.map((item, index) => (
            <G.ListItem
              key={`latest-${index}-${item.id}`}
              onClick={() =>
                handleClickEpisode(item.category_id, item.video_id)
              }
            >
              <G.SliderCard
                bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
              >
                <G.SliderCardText>{item.title}</G.SliderCardText>
              </G.SliderCard>
            </G.ListItem>
          ))}
        </G.List>
      </G.SliderContainer>
    </G.Container>
  );
}

export default Latest;
