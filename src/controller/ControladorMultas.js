const Loan = require('../models/multas');
const { all } = require('../routes');
const controller = {};

controller.generatemultaValors = (allborrowers, multaValor = 5) => {
    for (const borrower of allborrowers) {

        const fecha_final = new Date(borrower.loan.endDate);
        const fecha_entrega = new Date(borrower.loan.deliveryDate);
        const result = fecha_final - fecha_entrega;
        let daysresult = result/(1000 * 3600 * 24);
        const aux_date = new Date();


        let year = aux_date.getFullYear().toString();
        let month = (aux_date.getMonth()+1).toString();
        let day = aux_date.getDate().toString();

        if(month.length < 2){
            month = '0' + month;}

        if(day.length < 2){
            day = '0' + day;}        

        let today = year + '-' + month + '-' + day;


        const fecha_actual = new Date(today);
        const aux_result = fecha_final - fecha_actual;
        let aux_daysresult = aux_result/(1000 * 3600 * 24);

        if(daysresult < 0 || isNaN(daysresult)){
            if(isNaN(daysresult)){
                borrower.loan.multaValor = Math.abs(aux_daysresult * multaValor);
            }else{
                borrower.loan.multaValor = Math.abs(daysresult * multaValor);
            }
        }else{
            borrower.loan.multaValor = 0;
        }
    }

    return allborrowers;
}

controller.getAllBorrowers = async(req, res) => {
    const allborrowers = await Loan.find({}).sort({ startDate: 'desc' }).lean();
    const multaValor = 5;

    for (const borrower of allborrowers) {

        const fecha_final = new Date(borrower.loan.endDate);
        const fecha_entrega = new Date(borrower.loan.deliveryDate);
        const result = fecha_final - fecha_entrega;
        
        let daysresult = result/(1000 * 3600 * 24);
        
        const aux_date = new Date();
        let year = aux_date.getFullYear().toString();
        let month = (aux_date.getMonth()+1).toString();
        let day = aux_date.getDate().toString();

        if(month.length < 2){
            month = '0' + month;
        }

        if(day.length < 2){
            day = '0' + day;
        }        

        let today = year + '-' + month + '-' + day;

        const fecha_actual = new Date(today);
        const aux_result = fecha_final - fecha_actual;
        let aux_daysresult = aux_result/(1000 * 3600 * 24);

        if(daysresult < 0 || isNaN(daysresult)){
            if(isNaN(daysresult)){
                borrower.loan.multaValor = Math.abs(aux_daysresult * multaValor);
            }else{
                borrower.loan.multaValor = Math.abs(daysresult * multaValor);
            }
        }else{
            borrower.loan.multaValor = 0;
        }
    }

    res.render('index', { allborrowers });
}

module.exports = controller;