import mongoose from 'mongoose';

const { Schema } = mongoose;


const blogSchema = new Schema(
  {
    title: { 
        type: String, 
        required: true, 
        trim: true, 
        minLength: 3, 
        maxLength: 100 
    },
    content: 
    { 
        type: String, 
        required: [true,"Blog content is required"],
        minLength:[10,"atLeast 10 characters of content is required."]
    },
    excerpt: { 
        type: String, 
        maxLength: 300 
    }, 
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true,"author of the blog is required"] 
    }, 
    category: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Category',
        required:[true,"select the category of the blog"] 
    }],
    tags: [{ 
        type: String 
    }], 
    featuredImage: { 
        type: String 
    }, 
    media: [{ 
        type: String 
    }], 
    status: { 
        type: String, 
        enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'], 
        default: 'DRAFT' 
    }, 
    publishedAt: { 
        type: Date,
        default:Date.now
    }, 
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }, 
    viewCount: { 
        type: Number, 
        default: 0 
    }, 
    likes: { 
        type: Number, 
        default: 0 
    },
    dislikes: { 
        type: Number, 
        default: 0 
    }, 
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
    approvedStatus:{
        type:String,
        enum:["APPROVED","REJECTED","PROCESSED"],
        default:"PROCESSED"
    },
    approvedBy: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }, 
    lastViewed: { 
        type: Date,
        default:Date.now
    }, 
    allowComments: { 
        type: Boolean, 
        default: true 
    }, 
    allowSharing: { 
        type: Boolean, 
        default: true 
    }, 
    socialShares: { 
        type: Map, 
        of: Number, 
        default: { facebook: 0, twitter: 0, linkedin: 0 } 
    }, 
  },
  { timestamps: true }
);


blogSchema.methods.incrementViewCount = async function () {
  this.viewCount += 1;
  this.lastViewed = Date.now();
  await this.save();
};


blogSchema.methods.incrementLikes = async function () {
  this.likes += 1;
  await this.save();
};


blogSchema.methods.incrementDislikes = async function () {
  this.dislikes += 1;
  await this.save();
};


blogSchema.methods.softDelete = async function () {
  this.isDeleted = true;
  await this.save();
};


blogSchema.virtual('fullContent').get(function () {
  return `${this.content}`;
});


blogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Blog = mongoose.model('Blog', blogSchema);

