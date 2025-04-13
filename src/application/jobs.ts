import { Request, Response } from 'express';
import jobs from '../infrastructure/jobs';

export const getAllJobs = (req: Request, res: Response) => {
    return res.status(200).json(jobs);
}

export const createJob = (req: Request, res: Response) => {
    jobs.push(req.body);
    return res.status(201).send();
}

export const getJobById = (req: Request, res: Response) => {
    const job = jobs.find((job) => job._id === Number(req.params._id));
    return res.status(200).json(job);
}

export const updateJob = (req: Request, res: Response) => {
    const indexToUpdate = jobs.findIndex((job) => job._id === Number(req.params._id));
    jobs[indexToUpdate].title = req.body.title;
    jobs[indexToUpdate].description = req.body.description;
    jobs[indexToUpdate].location = req.body.location;
    jobs[indexToUpdate].company = req.body.company;
    return res.status(204).send();
}

export const deleteJob = (req: Request, res: Response) => {
    const indexRemove = jobs.findIndex((job) => job._id === Number(req.params._id));
    jobs.splice(indexRemove, 1);
    return res.status(204).send();
}