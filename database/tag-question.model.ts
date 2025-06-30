import { model, models, Schema, Types } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface ITagQuestion {
    tag: Types.ObjectId; // Reference to Tag
    question: Types.ObjectId; // Name of the tag
}

const TagQuestionSchema = new Schema<ITagQuestion>({
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true }, // Reference to Tag
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true }, // Reference to Question
}, { timestamps: true });

const TagQuestion = models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;