import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "../../components/Carousel";
import { useNavigate, useParams } from "react-router-dom";
import { categorys } from "../Home";

import * as G from "../../global/styles";

function Category() {
  const navigate = useNavigate();
  const { catStrg } = useParams();
  const [categ, setCateg] = useState(catStrg);

  const [categoryFilter, setCategoryFilter] = useState([]);

  function changeCategory(str) {
    navigate(`/categoria/${filter(str)}`);
  }

  function filter(value) {
    const data = value
      ?.toLowerCase()
      ?.replace("ó", "o")
      ?.replace("é", "e")
      ?.replace("ã", "a")
      ?.replace("ç", "c")
      ?.replaceAll(" ", "_");

    return data;
  }

  useEffect(() => {
    async function filterByCategory() {
      if (!catStrg) return;

      try {
        const { data } = await api.get(
          `/play-api.php?categoria${filter(catStrg)}`
        );
        setCategoryFilter(data.slice(0, 100));
      } catch (error) {
        console.log("Error on filter by category", error);
      }
    }
    filterByCategory();
  }, [categ]);

  function goToAnimePage(id) {
    navigate(`/anime/${id}`);
  }

  return (
    <G.Container>
      <h1>CATEGORIA / GÊNERO</h1>
      <G.SliderContainer>
        <Carousel>
          {categorys?.map((item, index) => (
            <G.SliderItem
              key={`category-${item}-${index}`}
              onClick={() => {
                setCateg(item);
                changeCategory(item);
              }}
            >
              <G.SliderCardMini>
                <span>{item}</span>
              </G.SliderCardMini>
            </G.SliderItem>
          ))}
        </Carousel>
      </G.SliderContainer>
      <G.List>
        {categoryFilter.map((item, index) => (
          <G.ListItem
            key={`category-${index}-${item.id}`}
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
    </G.Container>
  );
}

export default Category;
