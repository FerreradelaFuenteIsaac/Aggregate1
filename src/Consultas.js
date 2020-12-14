/*
Calcular la media de precio de los artículos vendidos a GAME
*/
db.Ventas.aggregate([
    { $match: { NombreComp: "GAME"}},
    { $group: { _id: "$NombreComp", IngresoM: { $avg: "$PrecioU"} }}    
])

/*
Calcular la media del ingreso total de cada venta a Worten
*/
db.Ventas.aggregate([
    { $match: { NombreComp: "Worten"}},
    { $group: { _id: "$NombreComp",
        IngresoTM: 
            { $avg: { $multiply: [ "$PrecioU", "$Cantidad"]} 
                }}}
])

/*
Gastos totales del año 2017
*/
