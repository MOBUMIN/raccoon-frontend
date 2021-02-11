import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Header } from '../../UI';

const Pin = () => {
	const history = useHistory();

	const handleButton = (e) => {
		history.push({
			pathname: '/play/nickname',
		});
	};
	return (
		<>
			<Header />
			<Dialog
				open={true}
				aria-labelledby="formDialogTitle"
				className="dialog"
				BackdropProps={{
					className: 'backdrop',
				}}
				PaperProps={{
					className: 'paper',
				}}
			>
				<DialogTitle id="formDialogTitle" disableTypography={true}>
					<Typography variant="h4">Join Raccoon with given PIN</Typography>
				</DialogTitle>
				<DialogContent className="content">
					<TextField
						autoFocus
						required
						margin="dense"
						id="pin"
						label="PIN Code"
						variant="filled"
						fullWidth
						className="field"
					/>
				</DialogContent>
				<DialogActions className="actions">
					<Button
						variant="contained"
						className="button"
						fullWidth
						onClick={handleButton}
					>
						Enter
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Pin;
