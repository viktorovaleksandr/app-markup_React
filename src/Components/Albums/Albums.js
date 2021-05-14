import { SectionHeader } from "../HeaderComponent/Section-Header";
import { AlbumsUl } from "./Albums-ul";
import { SectionFooter } from "../FooterComponent/Section-Footer";

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
