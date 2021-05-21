import SectionFilters from "../FiltersComponent/SectionFilters";
import {PostsUl} from "./PostsUl"
import SectionFooter  from "../FooterComponent/SectionFooter"

export function Posts() {
  return (
    <main className="uk-main">
      <div className="uk-section">
        <div className="uk-container">
          <SectionFilters/>
          <PostsUl/>
          <SectionFooter/>
        </div>
      </div>
    </main>
  );
}
