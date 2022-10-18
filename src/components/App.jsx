import { Component } from 'react';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { getImagesResponse } from 'services/API/pixabay';
import { SearchingImageApp } from './App.styled';
import { Modal } from 'components/Modal';
import { Loader } from 'components/Loader';

export class App extends Component {
  state = {
    request: '',
    images: [],
    page: 1,
    condition: 'pending',
    modalPicture: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { request, page, modalPicture } = this.state;
    // Генерация запросов

    if (prevState.request !== request || prevState.page !== page) {
      this.requestColection(this.state);
    }
    // Обезскроливание))

    if (modalPicture) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
  // Галерея
  addUserRequest = newRequest => {
    this.setState({
      request: newRequest,
      images: [],
      page: 1,
      condition: 'pending',
    });
  };
  requestColection = async ({ request, page }) => {
    this.setState({ condition: 'load' });
    try {
      const { data } = await getImagesResponse(request, page);
      this.setState(pS => ({
        images: [...pS.images, ...data.hits],
        condition: 'resolved',
      }));
    } catch (error) {
      console.log('error', error);
    }
  };

  // Пагинация

  loadMore = () => {
    this.setState(pS => ({ page: pS.page + 1 }));
  };

  // Логика модалки

  toggleModal = data => {
    this.setState({ modalPicture: data });
  };
  mouseClose = e => {
    if (e.target === e.currentTarget) {
      this.setState({ modalPicture: '' });
    }
  };
  keyClose = e => {
    if (e.code === 'Escape') this.setState({ modalPicture: '' });
  };

  render() {
    const { images, request, modalPicture, page, condition } = this.state;

    return (
      <SearchingImageApp>
        {modalPicture && (
          <Modal
            picture={modalPicture}
            mouseClose={this.mouseClose}
            keyClose={this.keyClose}
          />
        )}
        <Searchbar getImages={this.addUserRequest} />
        <ImageGallery images={images} openModal={this.toggleModal} />
        {condition === 'load' && <Loader />}
        {images.length / 12 === page && (
          <Button onClick={this.loadMore} name={request}></Button>
        )}
      </SearchingImageApp>
    );
  }
}
