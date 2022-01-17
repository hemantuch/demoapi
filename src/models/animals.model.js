const mongoose= require("mongoose");
const animalSchema = new mongoose.Schema({

        // animalId:{
        //     type:Number,
        //     unique:true
        // },
        animalname: {
            type: String 
        },
        brieadofanimal: {
            type: String 
        },
        color: {
            type: String
            },
        milkqty: {
            type: Number
        },
        totalchild: {
            type: Number
            },
        ageofanimal: {
            type: Number
            },
        weightofanimal: {
            type: Number
            },
        description: {
                type: String
                },
        totalamount:{
            type: String
        },
        imageofanimal:[ {
            frontimg:{
            type: String
            },
            backimg:{
            type: String
            },
            leftimg:{
            type: String
            },
            rightimg:{
            type: String
            }
        }],
}, {
    timestamps: true
});

const Animal = new mongoose.model('Animal',animalSchema);
// after making collection export it
module.exports = Animal;
