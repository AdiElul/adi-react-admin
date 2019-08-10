import React, { Component } from "react";

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(Response => Response.json())
      .then(albums => {
        this.setState({ albums: albums });
      });
  }
  render() {
    return (
      <div>
        <h2>Albums</h2>

        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>userId</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.albums.map((album, key) => {
              return (
                <tr key={key}>
                  <td >{album.id}</td>
                  <td >{album.userId}</td>
                  <td >{album.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Gallery;
