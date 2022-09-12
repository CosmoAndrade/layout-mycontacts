import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';

function NewContact() {
    return (
        <>
            <PageHeader
              title="Novo Contato"
            />

            <ContactForm
              buttonLabel="Cadastrar"
            />

        </>

    );
}

export default NewContact;
