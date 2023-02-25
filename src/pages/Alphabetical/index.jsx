import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "../../components/Carousel";
import { useNavigate } from "react-router-dom";

import * as G from "../../global/styles";
import * as S from "./styles";

function Category() {
  const navigate = useNavigate();

  const [letterFilter, setLetterFilter] = useState("#");
  const [results, setResults] = useState([]);

  function changeFilter(str) {
    navigate(`/letra/${str}`);
  }

  useEffect(() => {
    async function filterByLetter() {
      if (!letterFilter) return;

      try {
        const { data } = await api.get(`/play-api.php?letra=${letterFilter}`);
        setResults(data.slice(0, 100));
      } catch (error) {
        console.log("Error on filter by category", error);
      }
    }
    filterByLetter();
  }, [letterFilter]);

  function goToAnimePage(id) {
    navigate(`/anime/${id}`);
  }

  return (
    <G.Container>
      <h1>ALFABÉTICO</h1>
      <G.SliderContainer>
        <Carousel>
          {alphabet?.map((item, index) => (
            <S.SliderItem
              key={`letter-${index}-${item}`}
              onClick={() => {
                setLetterFilter(item);
                changeFilter(item);
              }}
            >
              <G.SliderCardMini>
                <span>{item}</span>
              </G.SliderCardMini>
            </S.SliderItem>
          ))}
        </Carousel>
      </G.SliderContainer>
      <G.List>
        {results.map((item, index) => (
          <G.ListItem
            key={`annime-${item.id}-${index}`}
            onClick={() => goToAnimePage(item.id)}
          >
            <G.SliderCard
              bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
            >
              <G.SliderCardText>{item.category_name}</G.SliderCardText>
            </G.SliderCard>
          </G.ListItem>
        ))}
      </G.List>
    </G.Container>
  );
}
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default Category;
