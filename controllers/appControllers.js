require('dotenv').config();
require("../db");
const { isValidObjectId } = require('mongoose');
const Person = require("../db/models/person");

/**
 * GET /
 * Entrance
 */
exports.hello = async (req, res, next) => {
    try {
        res.send('Hello');
        return;
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * POST /
 * CREATE: Adding a new person.
*/
exports.createUser = async (req, res, next) => {
    try {
        const {name} = req.body;

        if (!name || !req.body) return res.status(400).json({
            message: "'name' field is required"
        })

        if (typeof(name) != 'string') return res.status(400).json({
            message: "'name' must be of type string",
            status: 400
        })

        const newPerson = await Person.insertMany({
            name
        })

        return res.status(201).json({
            "message": "Person created successfully",
            "data": newPerson[0]
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * GET /user_id
 * READ: Fetching details of a person.
 */
exports.fetchUser = async (req, res, next) => {
    try {
        const id = req.params.user_id;
        if (isValidObjectId(id) == false) return res.status(404).json({
            "message": "Person not found"
        });

        const person = await Person.findById(id);
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })

        return res.status(200).json({
            "message": "Person fetched successfully",
            "data": person
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * PUT /user_id
 * UPDATE: Modifying details of an existing person
 */
exports.updateUser = async (req, res, next) => {
    try {
        const id = req.params.user_id;
        if (isValidObjectId(id) == false) return res.status(404).json({
            "message": "Person not found"
        });
        
        const person = await Person.findById(id);
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })
        const {name} = req.body;
        if (!name || !req.body) return res.status(400).json({
            message: "'name' field is required"
        })

        await Person.findByIdAndUpdate(id, {
            "name": name
        });

        const updatedPerson = await Person.findById(id);

        return res.status(200).json({
            "message": "Person updated successfully",
            "data": updatedPerson
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * DELETE /user_id
 * DELETE: Removing a person
 */
exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.params.user_id;
        if (isValidObjectId(id) == false) return res.status(404).json({
            "message": "Person not found"
        });
        
        const person = await Person.findById(id);
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })

        const deletedPerson = await Person.findByIdAndDelete(id);
        if (deletedPerson) {
            return res.status(200).json({
                "message": "Person deleted successfully"
            })
        }else {
            return res.status(400).json({
                "message": "Error while deleting person, pls try again later"
            })
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
