// rsuite
import { Modal } from 'rsuite';
// Components
import { Search } from '../..';
// ----------------------------------------

const SearchModal = ({ open, onClose }) => {

  // ------ JSX Code --------
  return (
    <Modal
      size={'sm'}
      open={open}
      onClose={onClose}
      className='block md:!hidden'
    >
      <Modal.Header>
        {/* <Modal.Title>{translate('search')}</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>

        <Search />
        <div className='w-[90%] flex flex-col gap-2 mx-auto mt-5'>
          <p >protin</p>
          <p >protin</p>
          <p >protin</p>
          <p >protin</p>

        </div>

      </Modal.Body>
      {/* <Modal.Footer>
          <Button
            className='bg-red-600'
            onClick={handleClose} appearance="subtle"
          >
            Cancel
          </Button>
          <Button
            className='bg-primary text-secondaryLight'
            onClick={handleClose}
            appearance="primary"
          >
            Ok
          </Button>
        </Modal.Footer> */}
    </Modal>
  )
}

export default SearchModal