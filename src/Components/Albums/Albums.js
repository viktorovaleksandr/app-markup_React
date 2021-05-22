import { SectionHeader } from "../HeaderComponent/SectionHeader";
import { AlbumsContainer } from "./AlbumsContainer";
import SectionFooter from "../FooterComponent/SectionFooter";

export function Albums() {
  return (
  <main className="uk-main">
    <SectionHeader/>
    <div className="uk-section">
      <div className="uk-container">
        <AlbumsContainer/>
        <SectionFooter/>
      </div>
    </div>
  </main>
  );
}
