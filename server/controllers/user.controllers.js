import User from "../models/user.model.js";
import extend from "lodash/extend.js";
//import errorHandler from "./error.controller";

const create = (req, res, next) => {
    console.log('Create');
};

const list = (req,res) => {
    console.log('List');
};

const userByID = (req, res, next, id) => {
    console.log('userByID');
    next();
};

const read = (res, req) => {
    console.log('Read');
};

const update = (req, res, next) => {
    console.log('Update');
};

const remove = (req, res, next) => {
    console.log('Remove');
};

export default {create, userByID, read, list, remove, update };