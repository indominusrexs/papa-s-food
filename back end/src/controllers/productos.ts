import {Request, Response} from 'express';
import Producto from '../models/producto';

export const getProductos = async (req:Request, res:Response)=> {
    const listProductos = await Producto.findAll()
    res.json(listProductos)
}

export const getProducto = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const producto = await Producto.findByPk(id);
    if (producto) {
        res.json(producto)
    } else {
        res.status(404).json({msg : 'No existe un producto con el id ${id}'
            })
    }
}

export const deleteProducto = async (req:Request, res:Response)=> {
    const {id} = req.params
    const producto = await Producto.findByPk(id);
    if (!producto) {
        res.status(404).json({msg : 'No existe un producto con el id ${id}'
        })
    } else {
        await producto.destroy();
        res.json({msg: 'El producto fue eliminado con éxito'
        })
    }
    
}
export const postProducto = async (req:Request, res:Response)=> {
    const {body} = req;
    try {
        await Producto.create(body);    
        res.json({
            msg: 'El producto fue agregado con éxito'
        })
        
    } catch (error) {
        res.json({
            msg: 'Error al ingresar producto'
        })
        
    }
    
}

export const updateProducto = async (req:Request, res:Response)=> {
    const {body} = req;
    const {id} = req.params
    const producto = await Producto.findByPk(id);
    try {
        if (producto){
            await producto.update(body);
            res.json({msg: 'El producto fue actualizado con éxito'})
        }else {
            res.json({ msg: 'No existe un producto con el id $(id)'})
        }
            
    } catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' })
    }
}
