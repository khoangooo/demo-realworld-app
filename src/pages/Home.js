import Banner from "../components/Banner";
import Feed from "../components/Feed";
import ArticlePreview from "../components/ArticlePreview";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div class="home-page">
      <Banner />
      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <Feed />
            <ArticlePreview />
          </div>
          <div class="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
