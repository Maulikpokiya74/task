const mongoose = require("mongoose") 
const Schema = mongoose.Schema


const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"],
        trim: true,
        minlength: [2, "First name must be at least 2 characters long"],
        maxlength: [50, "First name must be at most 50 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name meust be required"],
        trim: true,
        minlength: [2, "Last name must be at least 2 characters long"],
        maxlength: [50, "Last name must be at most 50 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email must be required"],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password must be required"],
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    age: {
        type: Number,
        min: [0, 'Age must be a positive number'],
        max: [120, 'Age must be less than or equal to 120'],
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
    },
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
 
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;