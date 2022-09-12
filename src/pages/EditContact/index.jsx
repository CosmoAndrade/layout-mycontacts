import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

function EditContact() {
    return (
        <>

            <PageHeader
              title="Editar Cosmo"
            />

            <ContactForm
              buttonLabel="Salvar alterações"
            />

        </>
    );
}

export default EditContact;
