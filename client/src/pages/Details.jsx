import React from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DetailsDescription from "../component/DetailsDescription";
import { API } from "../config/api";

function Details() {
  const params = useParams();
  let number = params.id;

  let { data: film } = useQuery("filmCache", async () => {
    const response = await API.get(`/film/${number}`);
    console.log(response);
    return response.data.data;
  });
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {film === undefined ? (
        <p>Data Tidak Ditemukan</p>
      ) : (
        <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "500px", backgroundColor: "#1F1F1F" }}>
            <iframe
              width="848"
              height="480"
              src={film.episode[0].linkfilm}
              title={film.episode[0].title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <Container className="d-flex justify-content-center">
            <DetailsDescription
              title={film.title}
              year={film.year}
              poster={film.thumbnailfilm}
              desc={film.desc}
              thumbnail={film.episode[0].thumbnailepisode}
              title_episode={film.episode[0].title_episode}
            />
          </Container>
        </>
      )}
    </div>
  );
}

export default Details;
