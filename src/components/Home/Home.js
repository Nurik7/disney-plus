import {Container} from "./HomeStyles";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Recommends from "../Recommends/Recommends";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trendings from "../Trendings/Trendings";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import db from "../../Firebase/firebase";
import {setMovies} from "../../features/movie/movieSlice";
import {selectUserName} from "../../features/user/userSlice";


const Home = (props) => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let recommends = []
  let newDisneys = []
  let originals = []
  let trendings = []

  useEffect(() => {
    db.collection('movies').onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, {id: doc.id, ...doc.data()}]
            break
          case 'new':
            newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
            break
          case 'original':
            originals = [...originals, {id: doc.id, ...doc.data()}]
            break
          case 'trending':
            trendings = [...trendings, {id: doc.id, ...doc.data()}]
            break
        }
      })
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      )
    })
  }, [userName])

  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trendings/>
    </Container>
  )
}

export default Home