import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose, composeWithMongooseDiscriminators } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const DKey = 'type'
const enumUserType = {
    ADMIN: 'Admin',
    CUSTOMER: 'Customer',
}
const UserSchema = new Schema({
  type: {
    type: String,
    enum: Object.keys(enumUserType),
    index: true,
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: {
    type: String
  },
  number: {
    type: String
  },
  password: {
    type: String,
    require: true,
    bcrypt: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
})
const AdminSchema = new Schema({

})
const CustomerSchema = new Schema({

})
UserSchema.plugin(bcrypt)
UserSchema.set('discriminatorKey', DKey)

export const UserModel = mongoose.model('User', UserSchema)
export const AdminModel = UserModel.discriminator(enumUserType.ADMIN, AdminSchema)
export const CustomerModel = UserModel.discriminator(enumUserType.CUSTOMER, CustomerSchema)
// export const UserTC = composeWithMongoose(UserModel).removeField('password')
export const UserTC = composeWithMongooseDiscriminators(UserModel)
export const AdminTC = UserTC.discriminator(AdminModel, { name: enumUserType.ADMIN })
export const CustomerTC = UserTC.discriminator(CustomerModel, { name: enumUserType.CUSTOMER })

export default UserModel
