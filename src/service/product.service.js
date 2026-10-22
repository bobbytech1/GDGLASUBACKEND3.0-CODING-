const Product = require('../models/product.model')

const createProduct = async (productData) => {
    return await Product.create(productData)
}

const getAllProducts = async () => {
    return await Product.find()
}

const getProductById = async (id) => {
    return await Product.findById(id)
}

const updateProductPatch = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, {new: true, runValidator: true})
}

const updateProductPut = async (id, updateData) => {
    return await Product.findOneAndReplace({_id: id}, updateData, {new: true, runValidator: true})
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id)
}

module.exports = {createProduct, getAllProducts, updateProductPatch, updateProductPut, getProductById, deleteProduct}