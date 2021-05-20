import { SectionHeader } from "../HeaderComponent/SectionHeader";
import { SectionFilters } from "../FiltersComponent/SectionFilters";
import { PostsUl } from "./PostsUl";
import { SectionFooter } from "../FooterComponent/SectionFooter";

export function PostsLists() {
  return (
    <main className="uk-main">
      <SectionHeader/>
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
