import { SectionHeader } from "../HeaderComponent/SectionHeader";
import SectionFilters from "../FiltersComponent/SectionFilters";
import { ContainerComponent } from "../ContainerComponent/ContainerComponent";
import SectionFooter  from "../FooterComponent/SectionFooter";

export function PostsLists() {
  return (
    <main className="uk-main">
      <SectionHeader/>
      <div className="uk-section">
        <div className="uk-container">
          <SectionFilters/>
          <ContainerComponent/>
          <SectionFooter/>
        </div>
      </div>
    </main>
  );
}
