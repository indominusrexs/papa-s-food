"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducto = exports.postProducto = exports.deleteProducto = exports.getProducto = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProductos = yield producto_1.default.findAll();
    res.json(listProductos);
});
exports.getProductos = getProductos;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({ msg: 'No existe un producto con el id ${id}'
        });
    }
});
exports.getProducto = getProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (!producto) {
        res.status(404).json({ msg: 'No existe un producto con el id ${id}'
        });
    }
    else {
        yield producto.destroy();
        res.json({ msg: 'El producto fue eliminado con éxito'
        });
    }
});
exports.deleteProducto = deleteProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_1.default.create(body);
        res.json({
            msg: 'El producto fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar producto'
        });
    }
});
exports.postProducto = postProducto;
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    try {
        if (producto) {
            yield producto.update(body);
            res.json({ msg: 'El producto fue actualizado con éxito' });
        }
        else {
            res.json({ msg: 'No existe un producto con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
});
exports.updateProducto = updateProducto;
