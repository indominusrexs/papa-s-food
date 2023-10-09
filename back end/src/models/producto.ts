import db from '../db/conection';
import { DataTypes } from 'sequelize';

const Producto = db.define('productos', {
    nombre : {
        type: DataTypes.STRING },
    imagen : {
        type: DataTypes.STRING },
    precio : {
        type: DataTypes.DOUBLE },
},{
    createdAt:false,
    updatedAt:false
}
);

export default Producto;