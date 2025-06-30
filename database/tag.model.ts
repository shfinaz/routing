import { model, models, Schema, Types } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface ITag {
    name: string; // Name of the tag
    questions: number; // Number of questions associated with this tag
}

const TagSchema = new Schema<ITag>({
    name: {type: String, required: true, unique: true}, // Ensure tag names are unique
    questions: { type:Number, default: 0}, // Reference to Question
}, { timestamps: true });

const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;