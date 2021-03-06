const { Router } = require('express');
const salesRoutes = Router();
const SalesController = require('../controllers/salesController');

salesRoutes.get('/', SalesController.getAllSales);
salesRoutes.get('/:id', SalesController.findSaleById);
salesRoutes.post('/', SalesController.create);
salesRoutes.put('/:id', SalesController.update);
salesRoutes.delete('/:id', SalesController.exclude);

module.exports = salesRoutes;
