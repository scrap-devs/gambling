import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function updateCoins(userId, amount) {
    await connectDB();
    try {
        const objectId = mongoose.Types.ObjectId(userId);
        // Increment the coins using Mongoose's $inc operator
        const updatedUser = await User.findByIdAndUpdate(
            objectId,
            { $inc: { coins: amount } },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    } catch (error) {
        console.error('Error incrementing coins:', error);
        throw error;
    }
}