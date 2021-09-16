import {Container, Content, Wrap} from "./NewDisneyStyles";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectNewDisney} from "../../features/movie/movieSlice";

const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney)
  if (movies) {
    var newDisneyMovies = movies.map((movie, key) => (
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
      <h4>New to Disney+</h4>
      <Content>
        {newDisneyMovies}
      </Content>
    </Container>
  )
}

export default NewDisney