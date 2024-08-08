import { Schema, model } from "mongoose"

const secretSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    } ,

    /*category : {
    type: string,
    enum : ["personal", "professional"],
    }*/
   
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      }
},

    {
        timestamps: true,

    });

const Secret = model("Secret", secretSchema);

export default Secret;