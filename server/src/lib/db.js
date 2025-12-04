import {PrismaCLient} from '@prisma/client'

const glovalForPrisma = global
const prisma = new PrismaClient()

if (process.env.NODE_ENV === 'production') glovalForPrisma.prisma = prisma

export default prisma