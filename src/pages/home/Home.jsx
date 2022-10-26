// import Stories from "../../components/stories/Stories"
// import Posts from "../../components/posts/Posts"
// import Share from "../../components/share/Share"
import "./home.scss"
import RightBar from "../../components/molecules/rightBar/RightBar"
import Share from "../../components/molecules/share/Share"

const Home = () => {
  return (
    <div className="home" style={{padding: '30px'}}>
      {/* <Stories/>
      <Share/>
      <Posts/> */}
      <Share/>
      <RightBar />
    </div>
  )
}

export default Home