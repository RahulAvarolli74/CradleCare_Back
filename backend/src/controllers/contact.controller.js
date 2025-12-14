import { Contact } from "../models/contactus.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiRes } from "../utils/ApiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    // 1. Validation
    // Check if any field is missing or empty
    if ([name, email, message].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields (name, email, message) are required");
    }

    // 2. Create Database Entry
    const newContact = await Contact.create({
        name,
        email,
        message
    });

    // 3. Verify Creation
    const createdContact = await Contact.findById(newContact._id);

    if (!createdContact) {
        throw new ApiError(500, "Something went wrong while saving the contact message");
    }

    // 4. Send Success Response using ApiRes
    return res
        .status(201)
        .json(
            new ApiRes(201, createdContact, "Message sent successfully!")
        );
});

export { submitContactForm };