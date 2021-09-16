import {
  Container,
  Background,
  ImageTitle,
  Controls,
  ContentMeta,
  Player,
  Trailer,
  AddList,
  GroupWatch, SubTitle, Description
} from "./DetailStyles";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import db from "../../Firebase/firebase";

const Detail = (props) => {
  const {id} = useParams()
  const [detailData, setDetailData] = useState({})
  useEffect(() => {
    db.collection('movies').doc(id).get().then((doc) => {
      if (doc) {
        setDetailData(doc.data())
      } else {
        alert('No such document in Firebase')
      }
    }).catch((e) => {
      console.log('Error getting document: ', e);
    })
  }, [id])

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title}/>
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title}/>
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt=""/>
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt=""/>
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span>

            </span>
            <span>

            </span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt=""/>
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>
          {detailData.subTitle}
        </SubTitle>
        <Description>
          {detailData.description}
        </Description>
      </ContentMeta>
    </Container>
  )
}

export default Detail