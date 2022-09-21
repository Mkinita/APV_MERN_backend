import mongoose from 'mongoose';


const pacientesSchema = mongoose.Schema( {
    nombre:{
        type: String,
        require:true,
    },
    propietario:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    chip:{
        type: String,
        require:true,
    },
    raza:{
        type: String,
        require:true,
    },
    fechaAlta:{
        type: Date,
        require:true,
        default:Date.now(),
    },
    sintomas:{
        type: String,
        require:true,
    },
    veterinario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Veterinario"
    },
    },  
    {
        timestamps:true,
    }
);


const Paciente = mongoose.model("Paciente", pacientesSchema);


export default Paciente;