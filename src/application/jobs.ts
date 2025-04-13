import { Request, Response } from 'express';
import jobs from '../infrastructure/jobs';
import Job from '../infrastructure/schemas/job';

export const getAllJobs = async (req: Request, res: Response) => {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
}

export const createJob = async (req: Request, res: Response) => {
    const job = req.body;
    await Job.create(job);
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