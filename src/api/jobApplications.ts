import express from "express";
import { createJobApplication, getJobApplications } from "../application/jobApplications";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/").get(getJobApplications).post(createJobApplication);

export default jobApplicationRouter;