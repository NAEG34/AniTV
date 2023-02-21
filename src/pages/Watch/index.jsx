import React, { useState, useEffect } from "react";

import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

import * as S from "./styles";

function Watch() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const [currentEpisode, setCurrentEpisode] = useState([]);
  const [prevEpisode, setPrevEpisode] = useState([]);
  const [nextEpisode, setNextEpisode] = useState([]);

  function goNextEpisode() {
    navigate(
      `/anime/${nextEpisode[0]?.category_id}/episode/${nextEpisode[0]?.video_id}`
    );
  }

  function goPrevEpisode() {
    navigate(
      `/anime/${prevEpisode[0].category_id}/episode/${prevEpisode[0].video_id}`
    );
  }

  useEffect(() => {
    async function getNextEpisode(catId) {
      try {
        const { data } = await api.get(
          `/play-api.php?episodios=${videoId}&catid=${catId}&next`
        );

        if (!data) return;

        setNextEpisode(data);
      } catch (error) {
        console.log("Couldn't find the prev episode", error);
      }
    }
    async function getPrevEpisode(catId) {
      try {
        const { data } = await api.get(
          `/play-api.php?episodios=${videoId}&catid=${catId}&previous`
        );

        if (!data) return;

        setPrevEpisode(data);
      } catch (error) {
        console.log("Couldn't find the prev episode", error);
      }
    }

    async function getCurrentEpisode() {
      try {
        const { data } = await api.get(`/play-api.php?episodios=${videoId}`);

        setCurrentEpisode(data);
        const catId = data[0].category_id;

        await getPrevEpisode(catId);
        await getNextEpisode(catId);
      } catch (error) {
        console.log("Couldn't find the episode", error);
      }
    }
    if (videoId) {
      getCurrentEpisode();
    }
  }, [videoId]);

  return (
    <S.Container>
      <S.Episode>
        {currentEpisode?.map((item) => (
          <S.VideoWrapper key={`episode-${item.videoId}-${item.category_id}`}>
            <h1>{item.title}</h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                onClick={() => goPrevEpisode()}
              >
                <path d="M449 839 185 575l264-264 66 66-199 198 199 198-66 66Zm262 0L447 575l264-264 66 66-198 198 198 198-66 66Z" />
              </svg>
              <video
                src={item.locationhd || item.locationsd || item.locationsd}
                controls
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                onClick={() => goNextEpisode()}
              >
                <path d="m251 839-66-66 198-198-198-198 66-66 264 264-264 264Zm262 0-66-66 198-198-198-198 66-66 264 264-264 264Z" />
              </svg>
            </div>
          </S.VideoWrapper>
        ))}
      </S.Episode>
    </S.Container>
  );
}

export default Watch;
