import { model, models, Schema, Types } from "mongoose";

export interface IAnswer {
    author: Types.ObjectId; // Reference to User
    question: Types.ObjectId; // Reference to Question  
    content: string; // The content of the answer
    upvotes: number; // Number of upvotes
    downvotes: number; // Number of downvotes
}

const AnswerSchema = new Schema<IAnswer>({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
}, { timestamps: true });

const Answer = models?.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;