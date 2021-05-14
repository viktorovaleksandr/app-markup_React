export function PostsItem({title, body}) {
   return(
      <div>
      <a
        href="/"
        className="uk-card uk-card-body uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            uk-cover="true"
          />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <p>
              {body}
            </p>
          </div>
        </div>
      </a>
    </div>
   )
}