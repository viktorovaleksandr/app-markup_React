import { SectionHeader } from "../HeaderComponent/Section-Header";
import { SectionFilters } from "../FiltersComponent/Section-Filters";
import { PostsGridUl } from "./PostsGrid-ul";
import { SectionFooter } from "../FooterComponent/Section-Footer"

export function PostsGrid() {
  return (
    <main className="uk-main">
      <SectionHeader/>
      <div className="uk-section">
        <div className="uk-container">
          <SectionFilters/>
          <PostsGridUl/>
         <SectionFooter/>
        </div>
      </div>
    </main>
  );
}
