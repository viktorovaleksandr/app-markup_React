import { SectionHeader } from "../HeaderComponent/SectionHeader";
import SectionFilters from "../FiltersComponent/SectionFilters";
import { GridContainer } from "./GridContainer";
import SectionFooter from "../FooterComponent/SectionFooter"

export function PostsGrid() {
  return (
    <main className="uk-main">
      <SectionHeader/>
      <div className="uk-section">
        <div className="uk-container">
          <SectionFilters/>
          <GridContainer/>
          <SectionFooter/>
        </div>
      </div>
    </main>
  );
}
