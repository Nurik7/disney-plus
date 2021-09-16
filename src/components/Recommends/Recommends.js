import {Container, Content, Wrap} from "./RecommendsStyles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRecommend} from "../../features/movie/movieSlice";

const Recommends = (props) => {
  const movies = useSelector(selectRecommend)
  if (movies) {
    var recommendedMovies = movies.map((movie, key) => (
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
      <h4>Recommended for you</h4>
      <Content>
        {recommendedMovies}
      </Content>
    </Container>
  )
}

export default Recommends