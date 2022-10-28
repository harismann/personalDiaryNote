// import Stories from "../../components/stories/Stories"
// import Posts from "../../components/posts/Posts"
// import Share from "../../components/share/Share"
import "./home.scss"
import RightBar from "../../components/molecules/rightBar/RightBar"
import Share from "../../components/molecules/share/Share"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listDiary } from '../../store/DiaryList/diarylist'


const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(listDiary())
    console.log('makan apa ya hari ini ')
  }, [dispatch])
  return (
    <div className="home" style={{padding: '30px'}}>
      {/* <Stories/>
      <Share/>
      <Posts/> */}
      <Share />
      <RightBar />
    </div>
  )
}

export default Home