import React from 'react'
import PropTypes from 'prop-types'
import { GalleryItemStyled, GalleryItemImageStyled } from './ImageGalleryItemStyled'


export const ImageGalleryItem = ({images, openModal}) =>{
    return images.map(({id, webformatURL, largeImageURL, tags}) => (
        <GalleryItemStyled key={id} id={id} onClick = {()=> openModal({largeImageURL})}>
            <GalleryItemImageStyled src={webformatURL} alt={tags} />
        </GalleryItemStyled>
    ));
};

ImageGalleryItem.propTypes = {
    images : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })),
    onOpenModal: PropTypes.func,
}