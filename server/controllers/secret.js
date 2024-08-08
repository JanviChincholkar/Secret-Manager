import Secret from './../models/Secret.js'
import User from './../models/User.js'


const postSecret = async (req, res) => {
    const { title, description, user } = req.body;

    const addSecret = new Secret({
        title,
        description,
        user
    })

    try {
        const savedSecret = await addSecret.save();

        res.json({
            success: true,
            message: `Your Secret Added Successfully`,
            data: savedSecret
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}


const getSecrets = async (req, res) => {
   
const secret = await Secret.find().sort({ createdAt: -1 })

    res.json({
        success: true,
        message: `Secret Fetched Successfully`,
        data: Secret
    })
}


const putSecret = async (req, res) => {
    const {
        title,
        description } = req.body

    const { id } = req.params

    await Secret.updateOne({ _id: id },
        {
            $set: {
                title : title,
                description: description
            }
        })

    const updatedSecret = await Secret.findById(id)

    res.json({
        success: true,
        message: "Your Secrets Updated Successfully",
        data: updatedSecret
    })
}

const deleteSecret = async (req, res) => {
    const { id } = req.params;

    await Secret.deleteOne({ _id: id })

    return res.json({
        success: true,
        message: `Secret Deleted Successfully`,
        data: null
    })
}

export { postSecret, deleteSecret, getSecrets, putSecret}