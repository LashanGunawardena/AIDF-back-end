import express from "express";
import { getAllJobs, createJob, getJobById, updateJob, deleteJob } from "../application/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getAllJobs).post(createJob);
jobsRouter.route("/:_id").get(getJobById).put(updateJob).delete(deleteJob);

export default jobsRouter;