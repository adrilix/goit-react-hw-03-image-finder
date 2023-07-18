import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
            HeaderStyled,
            SearchFormButtonStyled,
            SearchFormStyled,
            SearchInputStyled,
            SearchIconStyled
        } from './SearchbarStyled';


export class Searchbar extends Component {
    state = {
        inputNameImages: '',
    };

    handleInputChange = event => {
        this.setState({
            inputNameImages: event.currentTarget.value.toLowerCase().trim(),
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.inputNameImages === '') {
            alert('enter word to search images, please');
            return;
        }

        this.props.onSubmit(this.state.inputNameImages);
        this.setState({ inputNameImages: '' });
    };

    render() {
        return (
        <HeaderStyled>
            <SearchFormStyled onSubmit={this.handleSubmit}>
                <SearchFormButtonStyled type="submit">
                    <SearchIconStyled />
                </SearchFormButtonStyled>

                <SearchInputStyled
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.inputNameImages}
                    onChange={this.handleInputChange}
                />
            </SearchFormStyled>

        </HeaderStyled>
    )}
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  }
  
