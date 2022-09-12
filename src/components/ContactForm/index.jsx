import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { Form, ButtonContainer } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input
                  placeholder="Nome"
                />
            </FormGroup>

            <FormGroup error="O formato de email e inválido">
                <Input
                  placeholder="E-mail"
                />
            </FormGroup>

            <FormGroup>
                <Input
                  placeholder="Telefone"
                />
            </FormGroup>

            <FormGroup>
                <Select>

                    <option value="">Categoria</option>
                    <option value="instagram">instagram</option>
                    <option value="discord">Discord</option>

                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">
                   {buttonLabel}
                </Button>
            </ButtonContainer>

        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
  };

export default ContactForm;
