import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import * as S from "./styles";
import * as G from "../../global/styles";

function Anime() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    async function getInfo() {
      try {
        const { data } = await api.get(`/play-api.php?info=${id}`);
        setInfo(data);
      } catch (error) {
        console.log("Err on get anime info.", error);
      }
    }

    async function getEpisodes() {
      try {
        const { data } = await api.get(`/play-api.php?cat_id=${id}`);

        setEpisodes(data);
      } catch (error) {
        console.log("Err on get anime episodes.", error);
      }
    }
    if (id) {
      getInfo();
      getEpisodes();
    }
  }, [id]);

  function handleClickEpisode(videoId) {
    navigate(`/anime/${id}/episode/${videoId}`);
  }

  return (
    <G.Container>
      {info?.map((item) => (
        <S.AnimeData key={item.id}>
          <S.AnimeImage>
            <img
              src={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
              alt={item.category_image}
            />
          </S.AnimeImage>
          <S.AnimeInfo>
            <h1>{item.category_name}</h1>
            <div>{item.category_description}</div>
            <S.AFooter>
              <p>
                <span>Gênero: </span>
                {item.category_genres}
              </p>
              <p>
                <span>Ano: </span>
                {item.ano}
              </p>
            </S.AFooter>
          </S.AnimeInfo>
        </S.AnimeData>
      ))}

      <S.EpisodeContainer>
        <div id="revert-icon-div">
          <h1>Episódios</h1>
          <svg
            className={rotate === true ? "rotate" : ""}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 960 960"
            width="48"
            onClick={() => {
              setRotate(rotate === true ? false : true);
              setEpisodes([...episodes].reverse());
            }}
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
        </div>

        <S.AnimeEpisodes>
          {episodes?.map((item, index) => (
            <S.Episode
              watched={item.watched}
              key={`video-${item.video_id}-${index}`}
              onClick={() => handleClickEpisode(item.video_id)}
            >
              {item.title}
            </S.Episode>
          ))}
        </S.AnimeEpisodes>
      </S.EpisodeContainer>
    </G.Container>
  );
}

export default Anime;
