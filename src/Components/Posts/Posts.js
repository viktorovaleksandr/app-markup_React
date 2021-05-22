import SectionFilters from "../FiltersComponent/SectionFilters";
import { ContainerComponent } from "../ContainerComponent/ContainerComponent";
import SectionFooter  from "../FooterComponent/SectionFooter"

export function Posts() {
  return (
    <main className="uk-main">
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
