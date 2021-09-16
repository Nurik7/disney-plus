import {Container, Content, Wrap} from "./TrendingsStyles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTrending} from "../../features/movie/movieSlice";

const Trendings = (props) => {
  const movies = useSelector(selectTrending)
  if (movies) {
    var trendingsMovies = movies.map((movie, key) => (
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
      <h4>Trendings</h4>
      <Content>
        {trendingsMovies}
      </Content>
    </Container>
  )
}

export default Trendings