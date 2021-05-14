import { SectionFilters } from "../FiltersComponent/Section-Filters";
import {PostsUl} from "./Posts-ul"
import { SectionFooter } from "../FooterComponent/Section-Footer"

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
