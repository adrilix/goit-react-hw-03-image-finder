import React, { Component } from 'react';


export class App extends Component {
  state = {
    inputNameImages: "",
  };

  // handleSearchFormSubmit = inputNameImages => {
  //   this.setState({ inputNameImages});
  // };


  render() {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        {/* <Searchbar onSubmit = {this.handleSearchFormSubmit}></Searchbar>
        <ImageGallery input = {this.setState.inputNameImages}></ImageGallery> */}
      </div>
    );
  }
}

export default App;
