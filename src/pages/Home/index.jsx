import { Link, NavLink } from 'react-router-dom';
import {
    Container,
    InputSearchContainer,
    Header,
    ListContainer,
    Card,

}
    from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

function Home() {
    return (
        <Container>
            {/* <Loader isLoading />

            <Modal danger /> */}

            <InputSearchContainer>

                <input type="text" placeholder="Pesquisar contato" />

            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <Link to="/new">Novo contato</Link>
            </Header>
            <ListContainer>

                <header>
                    <button type="button">
                        <span> Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Cosmo Andrade</strong>
                            <small>instagram</small>
                        </div>
                        <span>cosmo@email.com</span>
                        <span>(85) 99999 - 9999</span>
                    </div>
                    <div className="actions">
                        <NavLink to="/edit/123">
                            <img src={edit} alt="Edit" />
                        </NavLink>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>

            </ListContainer>
        </Container>
    );
}

export default Home;
