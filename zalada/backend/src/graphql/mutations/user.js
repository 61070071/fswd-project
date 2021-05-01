import { UserTC, AdminTC, CustomerTC } from '../../models'

export const createUser = UserTC.getResolver('createOne')
export const updateUserById = UserTC.getResolver('updateById')
export const removeUserById = UserTC.getResolver('removeById')

export const createAdmin = AdminTC.getResolver('createOne')

export const createCustomer = CustomerTC.getResolver('createOne')