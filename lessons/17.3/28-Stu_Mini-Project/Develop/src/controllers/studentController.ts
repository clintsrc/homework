// ObjectId() method for converting studentId string into an ObjectId for querying database
import { ObjectId } from 'mongodb';
import { Student, Course } from '../models/index.js';
import { Request, Response } from 'express';

// TODO: Create an aggregate function to get the number of students overall
export const headCount = async () => {
    // Your code here
    try{
        const numberOfStudents = await Student.aggregate(
            [
                {
                    $count: "totalStudents"
                }
            ]
        );

        if(0 === numberOfStudents.length) {
             return 0;
        }
        console.log("Head count:", numberOfStudents);
        return numberOfStudents;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

// Aggregate function for getting the overall grade using $avg
export const grade = async (studentId: string) => {
    try {
        const result = await Student.aggregate([
            // TODO: Ensure we include only the student who can match the given ObjectId using the $match operator
        {
            // Your code here
            // match filters on the specified studentId (like a WHERE clause)
            /* Convert the string to a mongo ObjectId. ObjectId is the native identifier 
            type for MongoDB to ensure the value you're querying is the proper format */
            $match: {
                _id: new ObjectId(studentId)
            }
        },
        {
            /* Deconstruct an array field in a document into individual documents:
            Convert each assignment item in the assignments array into its own document that has the same 
            studentId, but creates a separate document for each assignment.
            */
            $unwind: '$assignments',
        },
        // TODO: Group information for the student with the given ObjectId alongside an overall grade calculated using the $avg operator
        {
            // Your code here
            // group the resulting documents back together (by student id)
            $group: {
                _id: '$_id', // group by each student's id
                overallGrade: {
                    $avg: '$assignments.score'   // calculate the average score
                }
            }
        },
        ]);
        console.log("Grade studentId:", studentId, result);
        return result;
    } catch (error) {
        console.error("Error determining grade:", error);
        return null;
    }
}

/**
 * GET All Students /students
 * @returns an array of Students
*/
export const getAllStudents = async (_req: Request, res: Response) => {
    try {
        const students = await Student.find();

        const studentObj = {
            students,
            headCount: await headCount(),
        }
        console.log("SUCCESS: getAllStudents");
        res.json(studentObj);
    } catch (error: any) {
        console.log("ERROR: getAllStudents");
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Student based on id /students/:id
 * @param string id
 * @returns a single Student object
*/
export const getStudentById = async (req: Request, res: Response) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findById(studentId);
        if (student) {
            console.log("SUCCESS: getStudentById", student.id);
            res.json({
                student,
                grade: await grade(studentId)
            });
        } else {
            console.log("SUCCESS: getStudentById: NOT FOUND");
            res.status(404).json({
                message: 'Student not found'
            });
        }
    } catch (error: any) {
        console.log("ERROR: getStudentById", error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * POST Student /students
 * @param object student
 * @returns a single Student object
*/

export const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
        console.log("createStudent success", student);
    } catch (err) {
        res.status(500).json(err);
        console.log("createStudent error", err);
    }
}

/**
 * PUT Student based on id /students/:studentId
 * @param object id, studentId
 * @returns a single Student object
*/

export const updateStudent = async (req: Request, res: Response) => {
    console.log('You are updating a student');
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.studentId },
            { $set: req.body },
            { runValidators: true, new: true }
          );

        if (!student) {
            res.status(404).json({ message: 'No student with this id!' });
        }
        
        res.json(student)
    } catch (error: any) {
        res.status(400).json({
          message: error.message
        });
      }
      return null;
    }


/**
 * DELETE Student based on id /students/:id
 * @param string id
 * @returns string 
*/

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        const student = await Student.findOneAndDelete({ _id: req.params.studentId });

        if (!student) {
            console.log("ERROR: deleteStudent, No such student exists");
            return res.status(404).json({ message: 'No such student exists' });
        }

        const course = await Course.findOneAndUpdate(
            { students: req.params.studentId },
            { $pull: { students: req.params.studentId } },
            { new: true }
        );

        if (!course) {
            console.log("SUCCESS: deleteStudent (but no courses found)", student);
            return res.status(404).json({
                message: 'Student deleted, but no courses found',
            });
        }
        
        return res.json({ message: 'Student successfully deleted' });
    } catch (err) {
        console.log("ERROR: deleteStudent", err);
        return res.status(500).json(err);
    }
}

/**
 * POST Assignment based on /students/:studentId/assignments
 * @param string id
 * @param object assignment
 * @returns object student 
*/

export const addAssignment = async (req: Request, res: Response) => {
    console.log('You are adding an assignment');
    console.log(req.body);
    try {
        /* The $addToSet operator adds an element to an array field, but only if
           that document doesn't already exist (is unique) to prevent duplicates */
        const student = await Student.findOneAndUpdate(
            { _id: req.params.studentId },  // filter on a student
            { $addToSet: { assignments: req.body } },
            { runValidators: true, new: true }
        );

        if (!student) {
            return res
                .status(404)
                .json({ message: 'No student found with that ID :(' });
        }

        return res.json(student);
    } catch (err) {
        return res.status(500).json(err);
    }
}

/**
 * UPDATE Assignment based on /students/:studentId/assignments/:assignmentId
 * @param string studentId 
 * @param string assignmentId
 * @returns object student 
*/

export const updateAssignment = async (req: Request, res: Response) => {
    console.log("You are updating an assignment", req.params);

    try {
        const { studentId, assignmentId } = req.params;
        const { name, score } = req.body;
        
        // Update the specified assignment in the assignments array
        const student = await Student.findOneAndUpdate(
            // Filter: find student and assignment by ID
            { _id: studentId, "assignments.assignmentId": assignmentId },
            // Here '$' refers to the first element that matches in the array: assignments.$.*
            {
                $set: {
                    "assignments.$.name": name,
                    "assignments.$.score": score,
                },
            },
            { runValidators: true, new: true }
          );

        if (!student) {
            res.status(404).json({ message: 'No student with this id!' });
        }
        
        res.json(student)
    } catch (error: any) {
        res.status(400).json({
          message: error.message
        });
      }
      return null;
    }


/**
 * DELETE Assignment based on /students/:studentId/assignments/:assignmentId
 * @param string studentId 
 * @param string assignmentId
 * @returns object student 
*/

export const removeAssignment = async (req: Request, res: Response) => {
    console.log("You are removing an assignment", req.params);
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.studentId },
            { $pull: { assignments: { assignmentId: req.params.assignmentId } } },
            { runValidators: true, new: true }
        );

        if (!student) {
            return res
                .status(404)
                .json({ message: 'No student found with that ID :(' });
        }

        return res.json(student);
    } catch (err) {
        return res.status(500).json(err);
    }
}
