import { Button, Form } from 'react-bootstrap';
import { addNewNote } from '../Slice/Note.Slice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { createUniqueId } from '../helper';

const FormInput = () => {
    const dispatch = useDispatch();
    const titleInput = useRef(null);
    const detailInput = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (titleInput.current.value === '' || detailInput.current.value === '') {
            alert('nhập đủ thông tin');
        } else
            dispatch(addNewNote(
                {
                    id: createUniqueId(),
                    title: titleInput.current.value,
                    details: detailInput.current.value
                }
            ));
        titleInput.current.value = '';
        detailInput.current.value = '';
    }

    return (
        <>
            <form action="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Note Title" ref={titleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Note Details" ref={detailInput} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={(e) => handleSubmitForm(e)}>
                    Add Note
                </Button>
            </form>
        </>
    );
}

export default FormInput;