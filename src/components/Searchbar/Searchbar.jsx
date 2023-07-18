// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Searchbar extends Component {
//     state = {
//         inputNameImages: '',
//     };

//     handleInputChange = event => {
//         this.setState({
//             inputNameImages: event.currentTarget.value.toLowerCase.trim(),
//         });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         if (this.state.inputNameImages === '') {
//             alert('enter word to search images, please');
//             return;
//         }

//         this.props.onSubmit(this.state.inputNameImages);
//         this.setState({ inputNameImages: '' });
//     };

//     render() {
//         return (
//         <header class="searchbar">
//             {/* <SearchForm onSubmit={this.handleSubmit}>
//                 <SearchFormButton type="submit">
//                     <IconSearch />
//                 </SearchFormButton>

//                 <SearchFormInput
//                     type="text"
//                     autocomplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                     value={this.state.inputNameImages}
//                     onChange={this.handleInputChange}
//                 />
//             </SearchForm>
//       //{' '} */}
//         </header>
//     )}
// }

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func,
//   }
  
//   export default Searchbar;
