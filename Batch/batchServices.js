const Batch = require('./batchModel');

const createBatch = async (batchData) => {
    try {
        const newBatch = await new batch(batchData).save();

        if (newBatch) {
            return {
              success: true,
              batchData: batchData,
            };
          } else {
            return {
              success: false,
              message: "Disculpa, ocurrió un error desconocido, inténtalo de nuevo.",
            };
          }
    } catch (error) {
        return error;
    }
};

const updateBatch = async (batchId, newBatchData) => {
    try{
        const newBatch = await Batch.findByIdAndUpdate(
            batchId, 
            newBatchData
        );
        if(!newBatch){ 
        return "Error al actualizar el lote"
        }else{
        return "Actualizacion realizada con exito"
        }   
    } catch(error){
        return error;
    };
};


const deleteBatch = async (batchId) => {
    try{
        await Batch.findByIdAndDelete(batchId);
        return 'Lote eliminado correctamente'
    } catch(error){
        return error;
    };
};

const findBatchById = async (batchId) => {
    try{
    const resBatch = await Batch.findById(batchId);
    return resBatch;
    } catch(error){
        return error;
    };
};

const readBatches = async () => {
    try {
        const batches = Batch.find();
        return batches;
    } catch (error) {
        return error;
    }
};



module.exports = { createBatch, updateBatch, deleteBatch, findBatchById, readBatches };