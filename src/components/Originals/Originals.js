import {Container, Content, Wrap} from "./OriginalsStyles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectOriginal} from "../../features/movie/movieSlice";

const Originals = (props) => {
  const movies = useSelector(selectOriginal)
  if (movies) {
    var originalsMovies = movies.map((movie, key) => (
      <Wrap key={key}>
        {movie.id}
        <Link to={'/detail/' + movie.id}>
          <img src={movie.cardImg} alt={movie.title}/>
        </Link>
      </Wrap>
    ))
  }

  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {originalsMovies}
      </Content>
    </Container>
  )
}

export default Originals