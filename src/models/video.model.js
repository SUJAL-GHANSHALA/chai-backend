import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from //mongoose aggregate pipelines, powerful framework, for aggregation queries, different from normal queries, used for complex queries,search about it
"mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videofile: {
            type: String, // cloudinary url
            required: true
        },

        thumbnail: {
            type: String, //cloudinary url
            required: true
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        duration: {
            Type: Number,
            required: true
        },

        views: {
            type: Number,
            default: 0
        },

        isPublished: {
            type: Boolean,
            default: true
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate) //plugin is a hook. mongoose aggregate pipelines, powerful framework, for aggregation queries, different from normal queries, used for complex queries,search about it

export const Video = mongoose.model("Video")