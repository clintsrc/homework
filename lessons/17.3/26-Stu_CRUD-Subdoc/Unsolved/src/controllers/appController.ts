/* BONUS
findOneAndDelete(): Finds and deletes a single document that matches the filter in a single atomic action. No hooks are triggered
findOne(), remove(): Finds then removes in distinct steps. Hooks will be triggered: pre('remove'), post('remove').

findOneAndUpdate(): Finds and updates a single document that matches the filter in a single atomic action. No hooks are triggered
findOne(), save(): Finds then updates in distinct steps. Hooks will be triggered: pre('save') and post('save').
 */

import { Application, User } from '../models/index.js';
import { Request, Response } from 'express';


  // TODO: Add comments to the functionality of the getApplications method
  // returns all applications in the collection including their tags
  export const getApplications = async (_req: Request, res: Response) => {
    try {
      const applications = await Application.find();
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // TODO: Add comments to the functionality of the getSingleApplication method
  // returns info on a specific application matching the app's id (/api/apps/<id>)
  export const getSingleApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

// TODO: Add comments to the functionality of the createApplication method
// Creates a new application and attempts to associate it with a user's ID
//    e.g. specify "userId": "67b243738888ffabc639e8bb",
  export const createApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { applications: application._id } }, // $addToSet operator prevents duplicate values
        { new: true } // show the updated record, not the original
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the application 🎉');
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }
  
  // TODO: Add comments to the functionality of the updateApplication method
  // Updates an existing application
  //    e.g. specify the "applicationId": "67b243738888ffabc639e8d1",
  export const updateApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },     // $set operator updates the field with the app info
        { runValidators: true, new: true }  // check the constraints defined in the schema
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the deleteApplication method
  // Deletes an application if it finds a matching applicationId
  //    e.g. specify the "applicationId": "67b243738888ffabc639e8d1",
  export const deleteApplication = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndDelete({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },  // $pull operator removes the specified app id from the Applications (array)
        { new: true } // show the updated record, not the original
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      res.json({ message: 'Application successfully deleted!' });
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

   // TODO: Add comments to the functionality of the addTag method
   // Add a tag to an application
   // :applicationId/tags
  export const addTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },  // $addToSet inserts the new tag
        { runValidators: true, new: true }  // check the constraints defined in the schema
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  // TODO: Add comments to the functionality of the addTag method
  // Delete a tag (by its id) from an application
  // :applicationId/tags/:tagId
  export const removeTag = async (req: Request, res: Response) => {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },  // $pull removes the specified tag (if found)
        { runValidators: true, new: true }  // check the constraints defined in the schema
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
      return;
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

