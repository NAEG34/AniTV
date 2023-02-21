import { useEffect, useState } from "react";
import * as S from "./styles";
import { api, api2 } from "../../services/api";
import Carousel from "../../components/Carousel";
import { useNavigate, useParams } from "react-router-dom";
import { categorys } from "../Home";

function Category() {
  const navigate = useNavigate();
  const { catStrg } = useParams();
  const [categ, setCateg] = useState(catStrg);

  const [categoryFilter, setCategoryFilter] = useState([]);

  function changeCategory(str) {
    navigate(`/categoria/${filter(str)}`);
  }

  function filter(str) {
    const data = str
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
      console.log(catStrg);
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
    <S.Container>
      <h1>CATEGORIA / GÊNERO</h1>
      <S.SliderContainer>
        <Carousel>
          {categorys?.map((item, index) => (
            <S.SliderItem
              key={`category-${item}-${index}`}
              onClick={() => {
                setCateg(item);
                changeCategory(item);
              }}
            >
              <S.SliderCard>
                <span>{item}</span>
              </S.SliderCard>
            </S.SliderItem>
          ))}
        </Carousel>
      </S.SliderContainer>
      <S.Page>
        {categoryFilter.map((item, index) => (
          <S.PageItem
            key={`category-${index}-${item.id}`}
            onClick={() => goToAnimePage(item.id)}
          >
            <S.PageCard
              bgURL={`https://cdn.appanimeplus.tk/img/${item.category_image}`}
            >
              <span>{item.category_name}</span>
            </S.PageCard>
          </S.PageItem>
        ))}
      </S.Page>
    </S.Container>
  );
}

export default Category;
