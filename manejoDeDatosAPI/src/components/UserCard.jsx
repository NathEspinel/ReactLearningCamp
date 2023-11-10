import React from "react";
import classes from "./UserCard.module.css"
export const UserCard = ({avatar, name, rol, email}) => {
  return (
    <div className={classes.userCard}>
      <img src={avatar} alt="Foto de perfil" />
      <h2>{name}</h2>
      <p>Rol: Desarrollador/a{rol}</p>
      <p>Contacto:{email}</p>
    </div>
  );
};

      

