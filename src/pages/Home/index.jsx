import * as S from "./styles";
import * as G from "../../global/styles";

import { useEffect, useState } from "react";
import { api, api2 } from "../../services/api";
import Carousel from "../../components/Carousel";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [mainCard, setMainCard] = useState(0);

  useEffect(() => {
    async function getMainCard(arr) {
      const itemName = arr[0].title
        .toLocaleLowerCase()
        .split(" dublado")[0]
        .split(" episodio")[0]
        .replace(/[^a-zA-Zs]/g, "-");

      const { data } = await api2.get(
        `/api/edge/anime?filter[text]=${itemName}`
      );

      setMainCard(data.data[0].attributes.coverImage.original);
    }

    async function getPopular() {
      try {
        const { data } = await api.get("/play-api.php?populares");
        setPopular(data.slice(0, 10));
      } catch (err) {
        console.log("Err on get more popular", err);
      }
    }

    async function getLatest() {
      try {
        const { data } = await api.get("/play-api.php?latest");
        setLatest(data.slice(0, 20));

        await getMainCard(data.slice(0, 5));
      } catch (err) {
        console.log("Err on get latest releases", err);
      }
    }

    async function getResults() {
      await getPopular();
      await getLatest();
    }
    getResults();
  }, []);

  function goToAnimePage(id) {
    navigate(`/anime/${id}`);
  }

  function handleClickEpisode(id, videoId) {
    navigate(`/anime/${id}/episode/${videoId}`);
  }
  function filterByCateg(catStrg) {
    navigate(`/categoria/${catStrg}`);
  }
  return (
    <G.Container>
      <S.Latest>
        <h1>LANÇAMENTOS</h1>
        <S.LatestContent>
          <S.LatestMain
            className="teste"
            bgURL={`${mainCard}`}
            onClick={() =>
              handleClickEpisode(latest[0]?.category_id, latest[0]?.video_id)
            }
          >
            <span>{latest[0]?.title}</span>
          </S.LatestMain>
          <S.LatestItemContainer>
            <div className="wrap">
              {latest?.slice(1, 3).map((item, index) => (
                <S.LatestItem
                  bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                  key={`latest-${index}-${item.id}`}
                  onClick={() =>
                    handleClickEpisode(item.category_id, item.video_id)
                  }
                >
                  <span>{item.title}</span>
                </S.LatestItem>
              ))}
            </div>
            <div className="wrap">
              {latest?.slice(3, 5).map((item, index) => (
                <S.LatestItem
                  bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
                  key={`latest-${index}-${item.id}`}
                  onClick={() =>
                    handleClickEpisode(item.category_id, item.video_id)
                  }
                >
                  <span>{item.title}</span>
                </S.LatestItem>
              ))}
            </div>
          </S.LatestItemContainer>
        </S.LatestContent>

        <S.SeeMore>
          <NavLink to="/lancamentos">
            Ver <span>+</span>
          </NavLink>
        </S.SeeMore>
      </S.Latest>
      <h1>CATEGORIA / GÊNERO</h1>
      <G.SliderContainer>
        <Carousel>
          {categorys?.map((item, index) => (
            <G.SliderItem
              key={`category-${item}-${index}`}
              onClick={() => filterByCateg(item)}
            >
              <G.SliderCardMini>
                <span>{item}</span>
              </G.SliderCardMini>
            </G.SliderItem>
          ))}
        </Carousel>
      </G.SliderContainer>
      <h1>POPULARES</h1>
      <G.SliderContainer>
        <Carousel>
          {popular?.map((item, index) => (
            <G.SliderItem
              key={`category-${item.id}-${index}`}
              onClick={() => goToAnimePage(item.id)}
            >
              <G.SliderCardLong
                bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
              >
                <G.SliderCardText>{item.category_name}</G.SliderCardText>
              </G.SliderCardLong>
            </G.SliderItem>
          ))}
        </Carousel>
      </G.SliderContainer>
    </G.Container>
  );
}
export const categorys = [
  "Aventura",
  "Ação",
  "Comédia",
  "Drama",
  "Dublado",
  "Ecchi",
  "Escolar",
  "Esporte",
  "Fantasia",
  "Filme",
  "Harem",
  "Histórico",
  "Jogo",
  "Josei",
  "Magia",
  "Mecha",
  "Militar",
  "Mistério",
  "OVA",
  "Poderes",
  "Psicológico",
  "Romance",
  "Samurai",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shounen",
  "Slice of life",
  "Sobrenatural",
  "Suspense",
  "Terror",
  "Yaoi",
  "Yuri",
];
export default Home;
