import { SectionHeader } from "../HeaderComponent/SectionHeader";
import { AlbumsUl } from "./AlbumsUl";
import { SectionFooter } from "../FooterComponent/SectionFooter";

export function Albums() {
  return (
  <main className="uk-main">
    <SectionHeader/>
      <div className="uk-section">
        <div className="uk-container">
          <AlbumsUl/>
          <SectionFooter/>
      </div>
    </div>
  </main>
  );
}
