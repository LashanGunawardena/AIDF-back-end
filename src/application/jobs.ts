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

export const getJobById = async (req: Request, res: Response) => {
    const jobs = Job.findById(req.params._id);
    return res.status(200).json(jobs);
}

export const updateJob = async (req: Request, res: Response) => {
    const jobToUpdate = Job.findById(req.params._id);
    if(!jobToUpdate){
        return res.status(404).send();
    }
    await Job.findByIdAndUpdate(req.params._id, {title: req.body.title, description: req.body.description, location: req.body.location, company: req.body.company});
    return res.status(204).send();
}

export const deleteJob = async (req: Request, res: Response) => {
    const job = await Job.findByIdAndDelete(req.params._id);
    if (!job) {
        return res.status(404).send();
    }
    return res.status(204).send();
}