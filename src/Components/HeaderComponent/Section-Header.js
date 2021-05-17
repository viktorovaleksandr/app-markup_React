import { useState } from 'react';
import { usePosts } from "../../PostsContext";

export function SectionHeader () {
  const { favorites, deleteFavoritePost } = usePosts();

   return(
      <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="Posts">Posts</a>
            </li>
            <li>
              <a href="Albums">Albums</a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <button
              className="uk-button uk-text-danger"
              type="button"
              uk-icon="icon: heart; ratio: 2">
            </button>
            <div className="uk-width-large" uk-dropdown="mode: click">
              <div className="uk-dropdown-grid uk-child-width-1-1@m" uk-grid="true">
                <div>
                  <table className="uk-table uk-table-divider uk-table-justify">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th className="uk-text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {favorites?.map((post) => {
                        return (
                        <tr key={post.id}>
                          <td>Title {post.id}: {post.title}</td>
                            <td className="uk-text-right">
                            <button className="uk-button" type="button" uk-icon="icon: close;"
                            onClick={() => deleteFavoritePost(post.id)}
                            ></button>
                          </td>
                        </tr>)
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
   );
}