
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../Services/FrutaService';

const UserDetailDialog = ({ open, onClose }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(userId);
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  const handleClose = () => {
    setUser(null); 
    onClose();
  };

  if (!user) {
    return null;  
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Detalles del Usuario</DialogTitle>
      <DialogContent>
        <p>Nombre de Usuario: {user.nick}</p>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailDialog;
