import React from 'react';
import T from 'prop-types';
import { Button } from './index';
import { useIntl } from 'react-intl';
import {Modal} from 'react-bootstrap'

function ConfirmationButton({ confirmation, onConfirm,  ...props }) {
	const [confirmationVisible, setConfirmationVisible] = React.useState(false);
	const intl = useIntl();

	const showConfirmation = () => setConfirmationVisible(true);
	const hideConfirmation = () => setConfirmationVisible(false);

	const handleClick = showConfirmation;
	const handleConfirmClick = () => {
		hideConfirmation();
		onConfirm();
	};
	const handleCancelClick = hideConfirmation;

	return (
		<>
			<Button variant="primary" onClick={handleClick} {...props} />
			{confirmationVisible && (

			<Modal 
					size="sm"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={confirmationVisible}
					onHide={hideConfirmation}
					{...props}
			>
					<Modal.Header className="Modal-Boder" closeButton>
						<Modal.Title>{intl.formatMessage({ id: 'logout.title'})}</Modal.Title>
					</Modal.Header>

					<Modal.Body>{confirmation}</Modal.Body>

					<Modal.Footer>
						<Button variant="secundary" className="me-2" onClick={handleCancelClick}>
						{intl.formatMessage({ id: 'logout.no'})}
						</Button>
						<Button variant="primary" onClick={handleConfirmClick}>
						{intl.formatMessage({ id: 'logout.yes'})}
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
}

ConfirmationButton.propTypes = {
	confirmation: T.node,
	onConfirm: T.func.isRequired,
};

ConfirmationButton.defaultProps = {
	confirmation: null,
};

export default ConfirmationButton;
