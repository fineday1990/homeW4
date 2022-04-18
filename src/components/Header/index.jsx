import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import s from "./styles.module.css";


export const Header = ({user, onUpdateUser}) => {

	function handleClickEditButton(e) {
		e.preventDefault();
		onUpdateUser({name: "Вишневский Илья Андреевич", about: "Frontend"})
	 } 
	const [open,setOpen] = React.useState(false);

	const handleClickOpen = () =>{
		setOpen(true);
	}
	const handleClose = () =>{
		setOpen(false);
	}

	const [openTwo,setOpenTwo] = React.useState(false);

	const handleClickOpenTwo = () =>{
		setOpenTwo(true);
	}
	const handleCloseTwo = () =>{
		setOpenTwo(false);
	}


  return (
	<AppBar position="static">
	<Toolbar>
	  <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
		 Post
	  </Typography>
	  <div className={s.profile}>
	  {user.name && <span>{user.name}: {user.about}</span>}
	  {user.email && <span>{user.email}</span>}
	  </div>

	  <Button variant="contained" color="secondary" onClick={handleClickEditButton}>
		change
      </Button>

	  <Button color="inherit" onClick={handleClickOpen}>Login</Button>

		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id ="form-dialog-title">Log in</DialogTitle>
			<DialogContent>
				<DialogContentText>Log in to see</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email"
					typy="email"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="pass"
					label="password"
					typy="password"
					fullWidthai
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">Cancel</Button>
				<Button onClick={handleClose} color="primary">Log in</Button>
			</DialogActions>
		</Dialog>

		<Button variant="contained" color="success" onClick={handleClickOpenTwo}>
		Create
      </Button>

		<Dialog open={openTwo} onClose={handleCloseTwo} aria-labelledby="form">
		<DialogContent>
				<DialogContentText>Карточка</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="name"
					typy="text"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="age"
					label="age"
					typy="text"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="email"
					typy="email"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="foto"
					label="foto"
					typy="text"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="pass"
					label="password"
					typy="password"
					fullWidthai
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleCloseTwo} color="primary">Create</Button>
			</DialogActions>
		</Dialog>
	</Toolbar>
 </AppBar>
  );
};