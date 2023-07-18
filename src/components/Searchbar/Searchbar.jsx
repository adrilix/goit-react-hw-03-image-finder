import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <header>
            <form onSubmit={this.handleSubmit}>
                <button type="submit">
                    {/* <IconSearch /> */}
                </button>

                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.inputNameImages}
                    onChange={this.handleInputChange}
                />
            </form>

        </header>
    )}
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  }
  
